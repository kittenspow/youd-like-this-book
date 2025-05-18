# you'd like this book
you'd like this book is a web app that suggests book recommendations based on a title you input. The app uses TF-IDF and cosine similarity to find similar books based on its summary.

<img src="https://github.com/kittenspow/youd-like-this-book/blob/e0179981f22414b381514d04ce8cb418a30187dd/picture_1" alt="image alt" width="500">    <img src="https://github.com/kittenspow/youd-like-this-book/blob/e0179981f22414b381514d04ce8cb418a30187dd/picture_2" alt="image alt" width="500">


## Tech Stack
Frontend: ReactJS, TailwindCSS

Backend: Flask (python)

## Dataset
CMU Book Summary Dataset on Kaggle

https://www.kaggle.com/datasets/ymaricar/cmu-book-summary-dataset/data

## Installation
Prerequisites:
1. Node.js and npm
2. Python and pip
3. Git
4. Requirements
  ```txt
  flask
  flask-cors
  pandas
  scikit-learn
  ```

### Clone the repository
```bash
git clone https://github.com/kittenspow/youd-like-this-book.git
cd youd-like-this-book
```
### Setting Up the Backend
1. Create a virtual environment and activate it:
```bash
python -m venv env
env\Scripts\activate  # on MAC source env/bin/activate
```
2. Install the dependencies:
```bash
pip install -r requirements.txt
```
3. Run the Flask server:
```bash
python app.py
```
### Setting up the Frontend
1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install depedencies:
```bash
npm install axios
```
3. Start the React development server::
```bash
npm start
```

## Usage
Open your browser and navigate to http://localhost:3000.
Input your favorite book title to see recommendations.
