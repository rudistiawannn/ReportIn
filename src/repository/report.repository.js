/* eslint-disable linebreak-style */
const prisma = require('../config/db.config');

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

const findReportByReportId = async (reportId) => {
  const reports = await prisma.reportData.findUnique({
    where: {
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

const findReportByUserId = async (_userId) => {
  const getReportByUserId = prisma.reportData.findMany({
    where: {
      userId: _userId,
    },
    select: {
      name: true,
      subject: true,
      description: true,
    },
  });

  return getReportByUserId;
};

module.exports = {
  findReport,
  sendReport,
  findReportByReportId,
  findReportByUserId,
  editReport,
  removeReport,
};
