# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.9.0

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# run this before copying requirements for cache efficiency
RUN pip install --upgrade pip

# Set the working directory to /drf
# NOTE: all the directives that follow in the Dockerfile will be executed in
# that directory.
WORKDIR /html2pdf

RUN ls .

# Adding requirements file to current directory
# just this file first to cache the pip install step when code changes
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt


EXPOSE 8080

CMD python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000
# CMD ["%%CMD%%"]