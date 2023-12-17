/* eslint-disable no-param-reassign */
import API_ENDPOINT from '../globals/api-endpoint';

class ReportResource {
  static async getAllUser() {
    const response = await fetch(API_ENDPOINT.GET_ALL_USER);
    const responseJson = await response.json();
    return responseJson;
  }

  static async register(inputData) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }

  static async login(inputData) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }

  static async getAllReport() {
    const response = await fetch(API_ENDPOINT.GET_ALL_REPORT);
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReport(inputData, id) {
    const response = await fetch(API_ENDPOINT.REPORT(id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }

  static async addReport(inputData, id) {
    const response = await fetch(API_ENDPOINT.REPORT(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }

  static async getHistory(id) {
    const response = await fetch(API_ENDPOINT.REPORT_HISTORY(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async getNews() {
    const response = await fetch(API_ENDPOINT.NEWS);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ReportResource;
