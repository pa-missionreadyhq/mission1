# Mission 1 - Car Type AI Prediction Tool

This simple webpage is used as a prototype for an AI prediction tool. It reads any image, and spits out a prediction percentage as well as what type of car (e.g. SUV, sedan, hatchback, truck) it is.

---

The tool is still a <u>prototype</u> and has only had ~20 images to test from. This is the first iteration prediction model. It's approximate accuracy according to a quick test is **~75%.**

---

## Usage

To access and preview this webpage, in the terminal of the folder *(mission1/server and mission1/client)*, type the following:
```
npm run dev
```
After that is done, **ctrl + click** on the appropriate link in the console of the front end to open the webpage.

You can then click *Browse...* to select an image file and then click *'Upload Image to test & predict'*.

It will then give you a prediction at what tag closest matches what you gave it and gives an associated confidence percentage.

---

## .env

This application depends on the use of a .env and its contents, in order for the backend to function properly. As is commonplace, .env and its contents are not shared and are included as part of the .gitignore. As such, you will need to fill out the following according to your own endpoints and API keys.

Set up the .env as follows:

```
AZURE_ENDPOINT= (URL endpoint found in Azure)
PROJECT_ID= (project ID from Custom Vision project)
MODEL_NAME= (name given to published model in Custom Vison project)
PREDICTION_KEY= (API key 1 or 2 from Custom Vison Prediciton resource in Azure)
```
---