export const PAYLOADS = {
  StartWallyeeSession: `{
  "sessionSID": "",
  "settings":
    {
      "scope": {
        "focusType": "focused",
        "focusEntity": "Organization",
        "entityName": "Water EmissionSource"
      },
      "timeWindow":{
        "periodStart": "2010-01-01T00:00:00",
        "periodEnd": "2027-01-01T00:00:00"
      }
    }
}`,
  StopWallyeeSession: `{
  "sessionSID": "{0}"
}`,
  ChatWithWallyee: `{
  "sessionSID": "{0}",
  "chatMessage": "{1}"
}`
};
