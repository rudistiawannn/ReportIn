/* eslint-disable linebreak-style */

const {
  findReport,
  sendReport,
  findReportById,
  editReport,
  removeReport,
} = require('./reportRepository');

const getAllReport = async () => {
  const allReport = await findReport();
  return allReport;
};

const createdReport = async (data, userId) => {
  // eslint-disable-next-line radix
  const createReport = await sendReport(data, userId);
  return createReport;
};

const getReportById = async (reportId) => {
  if (typeof reportId !== 'number') {
    throw Error('ID is not a number!!');
  }
  const report = await findReportById(reportId);
  if (!report) {
    throw Error('Report is not found!!');
  }
  return report;
};

const deletedReport = async (reportId) => {
  await getReportById(reportId);

  const deleteReport = await removeReport(reportId);
  return deleteReport;
};

const updatedReportById = async (newData, reportId) => {
  const updateReport = await editReport(newData, reportId);
  return updateReport;
};

module.exports = {
  getAllReport,
  getReportById,
  createdReport,
  deletedReport,
  updatedReportById,
};
