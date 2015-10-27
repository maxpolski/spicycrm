import { CALL_API } from 'redux-api-middleware';

export const IniStatuses = {
  INITIALIZED: 'INITIALIZED',
  NOT_INITIALIZED: 'NOT_INITIALIZED'
}

export function getIniState() {
  return {[CALL_API]: {
     endpoint: '/getinitstate',
     method: 'GET',
     headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
     },
     types: [
       'REQUEST',
       IniStatuses.INITIALIZED,
       'FAILURE'
     ]
   }
 }
}
