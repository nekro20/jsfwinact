var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  jsonfile = require('jsonfile'),
  coursesData = {};

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));

app.get('/api/courses', function(req, res) {
  jsonfile.readFile('./src/assets/courses.json', function (err, data) {
    if(err) throw err;
    coursesData = data;
    res.send(data);
  });
});

app.post('/api/courses', function(req, res) {
  function addCourse(req) {
    coursesData.courses.push(req.body);
  }
  checkCourses(addCourse, req);
  res.send(coursesData);
});

app.put('/api/courses', function(req, res) {
  function editCourse(req) {
    coursesData.courses.forEach((course, i) => {
      if (+course.id === +req.body.id) coursesData.courses[i] = req.body;
    });
  }
  checkCourses(editCourse, req);
  res.send(coursesData);
});

app.delete('/api/courses/:id', function(req, res) {
  function deleteCourse(id) {
    coursesData.courses.forEach((course, i) => {
      if (+course.id === +id) coursesData.courses.splice(i, 1);
    });
  }
  checkCourses(deleteCourse, req.params.id);
  res.send(coursesData);
});

function checkCourses(callback, args) {
  jsonfile.readFile('./src/assets/courses.json', function (err, data) {
    if(err) throw err;
    coursesData = data;
    callback(args);
    writeFile();
  });
}

function writeFile() {
  jsonfile.writeFile('./src/assets/courses.json', coursesData, function (err) {
    if(err) throw err;
  });
}

app.listen(4001);
