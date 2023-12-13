/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
const {
  getAllReport,
  getHistoryByReportId,
  createdReport,
  deletedReport,
  updatedReportById,
  getHistoryByUserId,
} = require('../service/report.service');

class ReportController {
  static getAllReport = async (req, res) => {
    try {
      const report = await getAllReport();
      res.send(report);
    } catch (error) {
      res.status(400).send({
        status: 400,
        message: 'Report is not found!!',
      });
    }
  };

  static postReport = async (req, res) => {
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
      res.status(400).send({
        status: 400,
        message: 'Report is not found!!',
      });
      throw Error(error);
    }
  };

  static deleteReport = async (req, res) => {
    try {
      // eslint-disable-next-line radix
      const reportId = parseInt(req.params.reportId);
      await deletedReport(reportId);
      res.send({
        message: 'Report is deleted',
        status: 200,
      });
    } catch (error) {
      res.status(400).send({
        status: 400,
        message: 'Report is not found!!',
      });
    }
  };

  static updateAllDataReport = async (req, res) => {
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
      res.status(400).send({
        status: 400,
        message: 'Report is not found!!',
      });
    }
  };

  static getHistoryByReport = async (req, res) => {
    try {
      // eslint-disable-next-line radix
      const reportId = parseInt(req.params.reportId);
      const getHistory = await getHistoryByReportId(reportId);
      if (!getHistory) {
        res.send({
          status: 400,
          message: 'Report is undefined',
        });
      }
      res.send(getHistory);
    } catch (error) {
      res.status(400).send({
        status: 400,
        message: 'Report is not found!!',
      });
    }
  };

  static updateSingleDataReport = async (req, res) => {
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
      res.status(400).send({
        status: 400,
        message: 'Report is not found!!',
      });
    }
  };

  static getHistoryByUser = async (req, res) => {
    try {
      // eslint-disable-next-line radix
      const userId = parseInt(req.params.userId);
      const getHistory = await getHistoryByUserId(userId);
      res.send({
        data: getHistory,
        status: 200,
      });
    } catch (error) {
      res.status(400);
      res.send({
        message: 'Report is undefined!!',
        data: 'cek',
      });
    }
  };
}

module.exports = ReportController;
