/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const {
  getAllReport,
  getReportById,
  createdReport,
  deletedReport,
  updatedReportById,
} = require('./reportService');

const uploadFile = require('./reportMidleware');

router.get('/', async (req, res) => {
  try {
    const news = await getAllReport();
    res.send(news);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/:reportId', async (req, res) => {
  try {
    // eslint-disable-next-line radix
    const reportId = parseInt(req.params.reportId);
    const getNewsById = await getReportById(reportId);
    if (!getNewsById) {
      res.send({
        status: 400,
        message: 'Report is undefined',
      });
    }
    res.send(getNewsById);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/:userId', uploadFile, async (req, res) => {
  try {
    const data = req.body;
    const file = req.file.path;
    // eslint-disable-next-line radix
    const userId = parseInt(req.params.userId);
    const createReport = await createdReport(data, userId, file);
    res.send({
      message: 'Rerport is created!!',
      data: createReport,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:reportId', async (req, res) => {
  try {
    // eslint-disable-next-line radix
    const reportId = parseInt(req.params.reportId);
    await deletedReport(reportId);
    res.send({
      message: 'Report is deleted',
      status: 200,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/:reportId', async (req, res) => {
  try {
    const data = req.body;
    const reportId = req.params.reportId;
    if (!(data.subject && data.description && data.file)) {
      res.send({
        message: 'Some field is missing',
        status: 400,
      });
      return;
    }
    const updateReport = await updatedReportById(data, reportId);
    res.send({
      message: 'Report has been updated',
      data: updateReport,
      status: 200,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch('/:reportId', async (req, res) => {
  try {
    const data = req.body;
    // eslint-disable-next-line radix
    const reportId = parseInt(req.params.reportId);
    const updateReport = await updatedReportById(data, reportId);
    res.send({
      message: 'Report has been updated',
      data: updateReport,
      status: 200,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
