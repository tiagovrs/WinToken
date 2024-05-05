import axios from "axios";

const lumxUrl = 'http://protocol-sandbox.lumx.io/';
const apiVersion = 'v2/'
export const apiKey = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiYjY5NDdlZTUtMDNjMy00MjQ5LTk0ZWQtY2Q4YjJiNDYwNzdjIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDg3MDk1N30.yIvNu23Vgm3XoFsdK9fUY5vTUuQQxrNGZW-15QdCgkGwa2EG_Ldj4UkrtR9lR3FCzEStTJX2CjX7nvUzPqtP6m0U2rI9bTwYD6Wa_aMaSUgnfuUDuFMHMyoWDfYzJle-2YT3StFhnar4I8-gfUutuNWOIh4CGluQK6W84p2IkPjr_luaYqGAwfl9ejBpubY5L8IdO6YHkGJHFlbiCo1qUTk_RSZ2uJmX162kziLTndi_hbvMfcDSRpV6DZx8kVYaoEE4OQJuefDnjqBZ6amMp-B28DSmSOjo155ilNmOs86Fl5Fqbx8j_p4ikQj3aNw3yiu_p69I17rFU2RELsMNJdltkiLMNKCRStjrEF5CUDq0hAgGFlqT0ymNncHBrE9PI6UjK4YSl7QH9kuKhBgD2Mkc56ZkQF0k12mGMqZFIKP0SlAUAmOqF4Qjy_fEAwKvU-1SICWPD4Fq9CFfPlhudRIM_trsx-MJzGfjtNf27fzr5cTyVSK__rerIJgT-RNgrY7Wz_438rhW-JyjjkgP3-lY6z4mCdshrUHGp0Nl9jaFD5q-_LPQsrR-RGugAox41RFNLeVpoTVU17RdRE3FBYxQrkW-6icSZlVCfmzM4juVEeimFl0jiydgLfJHIjE1X9incKBZRMF_jQmhlRcfzwJ16b6DfBlCRSAsjG6lsG8'

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