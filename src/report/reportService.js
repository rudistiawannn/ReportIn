/* eslint-disable linebreak-style */
const prisma = require('../database/index');

const getAllReport = async () => {
  const allReport = await prisma.user.findMany({
    include: {
      ReportData: true,
    },
  });

  return allReport;
};

const createdReport = async (data, userId) => {
  const createReport = await prisma.reportData.create({
    data: {
      subject: data.subject,
      description: data.description,
      file: data.file,
      name: {
        connect: {
          // eslint-disable-next-line radix
          id: parseInt(userId),
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

const getReportById = async (reportId) => {
  if (typeof reportId !== 'number') {
    throw Error('ID is not a number!!');
  }

  const report = await prisma.reportData.findUnique({
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

  if (!report) {
    throw Error('Report is not found!!');
  }

  return report;
};

const deletedReport = async (reportId) => {
  await getReportById(reportId);

  const deleteReport = await prisma.reportData.delete({
    where: {
      // eslint-disable-next-line radix
      id: parseInt(reportId),
    },
  });
  return deleteReport;
};

const updatedReport = async (newData, reportId) => {
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

const updatedSingleReport = async (newData, reportId) => {
  const updateSingleReport = await prisma.reportData.update({
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
  return updateSingleReport;
};

module.exports = {
  getAllReport,
  getReportById,
  createdReport,
  deletedReport,
  updatedReport,
  updatedSingleReport,
};
