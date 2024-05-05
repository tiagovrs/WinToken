import axios from "axios";

const lumxUrl = 'http ://protocol-sandbox.lumx.io/';
const apiVersion = 'v2/'
export const apiKey = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiNjVhMDY0ODEtZjYyNi00ZjE0LWJkMmMtYzQwNzJmNjJjZmFhIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDg2NzI2OX0.e1uGL1E5LpiKuz3VuB_rGFHvQkZE9rqOLVXlFT5s8f4Z1ZGIIY2avXDA-dc7B8goaw8lNAFTK_HKMbSj3W9xjNFWl3UL8XqoPTeMt7ovl-wvHLAo_5sXUFPtuwUmqYlBZgvaDfgDYU32QBOhwaQiiDFdMN80UYORGijCqh88mbpFlxugAmMJRl0wsqt6xgs6dzEMIm9y-L55aZG8bXkWNIPfOqXOVD1UcsaIdzcK5u_xFBXYf-YAkcauc-6mScrp0IRejMuCUQCa9H09SbaoT-LGcN8xKXBLKuhaV70hZ5GI5SiVeumOjllJV88pIzzKNrWQVR854yIDbbw__gEjCYH4PY3WxaNkmlbOlybbBotYwxG6njy4Nh4X-rftn7Rkx9iZUiUPHYVq5l-WK_yDPaUWYw6eoz0KBI3t4TBellKIU2c5gvmlt-hZOKibe5uX7p2Noxl-D2pia9zAzwqYztOE0iJCHy0vZvqfZSkj3V2GQAfaS1Bc3kwr_so_uRePXp9qFz51twGBenN0-VXryNSJiOXVAfM3KXGr3TsrpQV47x7dEbAGeTP2I0rQpjrIosiS_wweMarlpUU6_IKk6OmCldnCGqmFm6j9a6raj1pt-Lu6u0Y42G0UO3dpsTVt-GrJLQN3r6Jngk3YlXe1IyQZNRuNKN2xqPM23-Z12MM'
const axiosInstance = axios.create({
  baseURL: `${lumxUrl}${apiVersion}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});

export default axiosInstance;