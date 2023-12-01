/* eslint-disable linebreak-style */
const prisma = require('../database/index');

const findReport = () => {
  const getAllReport = prisma.user.findMany({
    include: {
      ReportData: true,
    },
  });
  return getAllReport;
};

const sendReport = async (data, userId, _file) => {
  const createReport = await prisma.reportData.create({
    data: {
      subject: data.subject,
      description: data.description,
      file: _file,
      name: {
        connect: {
          // eslint-disable-next-line radix
          id: userId,
        },
      },
    },
    select: {
      id: true,
      subject: true,
      description: true,
      file: true,
      name: true,
      userId: true,
    },
  });
  return createReport;
};

const findReportById = async (reportId) => {
  const reports = await prisma.reportData.findUnique({
    where: {
      // eslint-disable-next-line radix
      id: reportId,
    },
    select: {
      subject: true,
      description: true,
      file: true,
    },
  });
  return reports;
};

const editReport = async (newData, reportId) => {
  const updateReport = await prisma.reportData.update({
    data: {
      subject: newData.subject,
      description: newData.description,
      file: newData.file,
    },
    where: {
      // eslint-disable-next-line radix
      id: parseInt(reportId),
    },
  });
  return updateReport;
};

const removeReport = async (reportId) => {
  const deleteReport = await prisma.reportData.delete({
    where: {
      // eslint-disable-next-line radix
      id: parseInt(reportId),
    },
  });
  return deleteReport;
};

module.exports = {
  findReport,
  sendReport,
  findReportById,
  editReport,
  removeReport,
};
