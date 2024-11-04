// src/api/googleCalendar.ts

import { gapi } from "gapi-script";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const API_KEY = process.env.YOUR_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

export const initClient = () => {
    return new Promise<void>((resolve, reject) => {
        gapi.load("client:auth2", () => {
            gapi.client
                .init({
                    apiKey: 'AIzaSyA6hIkE4h0auj-sBOuFSAqikT5rIfpzQ0U',
                    clientId: '733812945276-f7apirma2rilmfid4c87j6t04ocs0n6t.apps.googleusercontent.com',
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
