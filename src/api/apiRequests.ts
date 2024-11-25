
import { gapi } from "gapi-script";
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

//google calendar api requests:
export const initClient = () => {
    return new Promise<void>((resolve, reject) => {
        gapi.load("client:auth2", () => {
            gapi.client
                .init({
                    apiKey: process.env.REACT_APP_API_KEY,
                    clientId: process.env.REACT_APP_CLIENT_ID,
                    discoveryDocs: [
                        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
                    ],
                    scope: SCOPES,
                })
                .then(() => resolve())
                .catch(reject);
        });
    });
};

export const reauthorize = async () => {
    const authInstance = gapi.auth2.getAuthInstance();
    await authInstance.signOut();
    await authInstance.signIn();
};

export const getEvents = async (
    calendarId = "primary",
    timeMin: string,
    timeMax: string
) => {
    try {
        const events = await gapi.client.calendar.events.list({
            calendarId,
            timeMin,
            timeMax,
            singleEvents: true,
            orderBy: "startTime",
        });
        return events.result.items || [];
    } catch (error) {
        // If we receive a 403 error, attempt reauthorization
        if (error.status === 403) {
            await reauthorize();
            // Retry fetching events after reauthorization
            return await gapi.client.calendar.events.list({
                calendarId,
                timeMin,
                timeMax,
                singleEvents: true,
                orderBy: "startTime",
            }).then(res => res.result.items || []);
        } else {
            throw error;
        }
    }
};
