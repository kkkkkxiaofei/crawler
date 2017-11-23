import express from 'express';
import Crawler from 'crawler';
import _ from 'lodash';

const parseData = ({$, body}) => {
    var data = _.map($(body).find(('ul.listing-list > li')), function(elem) {
        var $listing = $(elem);
        var imgSrc = $listing.find('.slick-active img').attr('data-src');
        var location = $listing.find('.row-one-left-col-listing-location').text();
        return {
            imgSrc,
            location
        };
    });
    return data;
};

const startCrawling = (request, response) => {
    const crawler = new Crawler({
        rateLimit: 1000, // `maxConnections` will be forced to 1
        callback(err, res, done) {
            done();
            if (err) {
                console.log('failed caused by - ', err);
                response.status(500).end();
            } else {
                response.status(200).send(parseData(res));
            }
        }
    });
    const destination = request.query.uri;
    destination && crawler.queue(destination);
};

export default () => {
    const router = express.Router();
    router.get('/api/iproperty/srp', (req, res) => {
        startCrawling(req, res);
    });
    return router;
};

