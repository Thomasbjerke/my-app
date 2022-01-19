import qs from 'qs';


/**
 * @class FitbitService
 * FitbitService is a service class created to provide communication with
 * the Fitbit Web API via both OAuth authentication and REST web endpoints.
 * Credentials for authentication are to be found in the config.js file.
 */
class AdressaparkenService {
    getSensorData(sensorName: string): any {
        return new Promise((resolve, reject) => {

            fetch('https://api.adressaparken.no/v1/sensorDataList?sensor='+sensorName+'&limit=10&offset=0', {
                method: 'GET',
                headers: {

                }
            })
                .then(response => {
                    if (!response.ok) {
                        return reject(response);
                    }
                    return response.json();
                })
                .then(json => {
                    return resolve(json);
                })
                .catch(error => { return reject('Fetch request failed: ' + error) });
        });
    }


}


export default AdressaparkenService;
