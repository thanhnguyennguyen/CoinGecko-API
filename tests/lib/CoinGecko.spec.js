//Modules
const fs = require('fs');
const mocha = require('mocha');
const chai = require('chai');
var should = chai.should();

//Helpers
const CoinGecko = require('../../lib/CoinGecko');

const shared = require('../shared');

describe('CoinGecko', function () {
    beforeEach(function (done) {
        this.CoinGeckoClient = new CoinGecko();

        done();
    });

    describe('ping', function () {
        beforeEach(function (done) {
            this.CoinGeckoClient.ping().then((data) => {
                this.data = data;
                done();
            });
        });

        shared.shouldBeAValidRequest();
    });

    describe('global', function () {
        beforeEach(function (done) {
            this.CoinGeckoClient.global().then((data) => {
                this.data = data;
                done();
            });
        });

        shared.shouldBeAValidRequest();
    });

    describe('coins', function () {

        describe('list', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.list().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('all', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.all({
                    order: CoinGecko.ORDER.COIN_NAME_ASC,
                    per_page: 100,
                    page: 1,
                    localization: false,
                    sparkline: true,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('markets', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.markets({
                    vs_currency: 'usd',
                    ids: ['bitcoin', 'ethereum', 'ripple'],
                    order: CoinGecko.ORDER.COIN_NAME_ASC,
                    per_page: 100,
                    page: 1,
                    sparkline: true,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetch', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.fetch('bitcoin', {
                    tickers: true,
                    market_data: true,
                    community_data: true,
                    developer_data: true,
                    localization: true,
                    sparkline: true,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchTickers', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.fetchTickers('bitcoin').then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchHistory', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.fetchHistory('bitcoin', {
                    date: '30-12-2017',
                    localization: true,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchMarketChart', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.fetchMarketChart('bitcoin', {
                    vs_currency: 'usd',
                    days: 1,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchStatusUpdates', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.coins.fetchStatusUpdates('bitcoin', {
                    per_page: 100,
                    page: 1,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchCoinContractInfo', function () {
            beforeEach(function (done) {
                var zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
                this.CoinGeckoClient.coins.fetchCoinContractInfo(zrx).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

    });

    describe('exchanges', function () {
        describe('all', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.exchanges.all().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('list', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.exchanges.list().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetch', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.exchanges.fetch('binance').then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchTickers', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.exchanges.fetchTickers('binance', {
                    page: 1,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchStatusUpdates', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.exchanges.fetchStatusUpdates('binance', {
                    per_page: 100,
                    page: 1,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });
    });

    describe('statusUpdates', function () {
        describe('all', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.statusUpdates.all({
                    category: CoinGecko.STATUS_UPDATE_CATEGORY.EVENT,
                    project_type: CoinGecko.STATUS_UPDATE_PROJECT_TYPE.COIN,
                    per_page: 100,
                    page: 1,
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });
    });

    describe('events', function () {
        describe('all', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.events.all({
                    country_code: 'US',
                    type: CoinGecko.EVENT_TYPE.CONFERENCE,
                    page: 1,
                    upcoming_events_only: false,
                    from_date: '2018-06-01',
                    to_date: '2018-07-01'
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchCountries', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.events.fetchCountries().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchTypes', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.events.fetchTypes().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });
    });

    describe('exchangeRates', function () {
        describe('all', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.exchangeRates.all().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });
    });

    describe('simple', function () {
        describe('price', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.simple.price({
                    vs_currencies: 'usd',
                    ids: ['bitcoin', 'ethereum', 'ripple'],
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });
        
        describe('supportedVsCurrencies', function () {
            beforeEach(function (done) {
                this.CoinGeckoClient.simple.supportedVsCurrencies().then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });

        describe('fetchTokenPrice', function () {
            beforeEach(function (done) {
                var zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
                this.CoinGeckoClient.simple.fetchTokenPrice({
                    contract_addresses: zrx,
                    vs_currencies: 'usd',
                }).then((data) => {
                    this.data = data;
                    done();
                });
            });

            shared.shouldBeAValidRequest();
        });
    });

});