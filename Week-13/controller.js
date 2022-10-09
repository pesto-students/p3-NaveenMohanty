const { check, body } = require('express-validator');
const { expressError, weatherApiCall, spliceIntoChunks } = require('./util');


exports.weatherCities = [
  check('pagination').exists().withMessage("pagination not present").notEmpty().withMessage("pagination cannot be empty").isBoolean().withMessage("pagination value must be a Boolen."),
  body('pagination').custom((value, { req }) => {
    if (value) {
      let { limit } = req.body
      if (!limit) {
        throw new Error('limit must be present.');
      } else if (!Number.isInteger(limit)) {
        throw new Error('limit must be Number.');
      }
    }
    return true;
  }),
  body('pagination').custom((value, { req }) => {
    if (value) {
      let { page } = req.body
      if (!page) {
        throw new Error('page must be present.');
      } else if (!Number.isInteger(page)) {
        throw new Error('page must be Number.');
      }
    }
    return true;
  }),
  check('stateList').exists().withMessage("stateList not present").notEmpty().withMessage("stateList cannot be empty").isArray().withMessage("stateList must be a array of state names."),
  check('search').optional().isString().withMessage("search value must be string."),
  async (req, res, next) => {
    try {
      await expressError(req, res)
      let { pagination, limit, stateList, page, search } = req.body
      if (pagination) {
        let chunkStateList = spliceIntoChunks(stateList, limit)
        if (chunkStateList.length >= page) {
          let chunkState = chunkStateList[page - 1]

          if (search) {
            let searchList = []
            for (let state of chunkState) {
              if (String(state).toLowerCase().search(String(search).toLowerCase()) > -1)
                searchList.push(state)
            }
            chunkState = [...searchList]
          }

          let promArr = []
          for (let state of chunkState) {
            promArr.push(await weatherApiCall({ q: state }))
          }

          let data = await Promise.all(promArr)
          res.json({ error: false, data, msg: "Data found success." })
          return;
        } else {
          res.json({ error: false, data: [], msg: "Data not found." })
          return;
        }
      } else {

        if (search) {
          let searchList = []
          for (let state of stateList) {
            if (String(state).toLowerCase().search(String(search).toLowerCase()) > -1)
              searchList.push(state)
          }
          stateList = [...searchList]
        }

        let promArr = []
        for (let state of stateList) {
          promArr.push(await weatherApiCall({ q: state }))
        }

        let data = await Promise.all(promArr)
        res.json({ error: false, data, msg: "Data found success." })
        return;
      }
    } catch (error) {
      next(error)
      return;
    }
  }
]

exports.weatherCity = [
  check('state').exists().withMessage("state not present").notEmpty().withMessage("state cannot be empty").isString().withMessage("state value must be a String."),
  check('days').optional().notEmpty().withMessage("days cannot be empty").isInt().withMessage("days value must be value."),
  check('date').optional().isInt().withMessage("date value must be EPOCH time."),
  async (req, res, next) => {
    try {
      await expressError(req, res)
      let { state, days } = req.body
      let data = await weatherApiCall({ q: state, days }, true)
      res.json({ error: false, data, msg: "Data found success." })
      return;
    } catch (error) {
      next(error)
      return;
    }
  }
]