var rows = 500;
var cols = 100;
var conf = {
  cols: cols,
  rows: rows,
  handler: termHandler,
  termDiv: "term",
  fontClass: "font",
  frameWidth: 0,
  textColor: "#ffffff", // white
  //textColor: "#00ff41", // terminal green
  bgColor: "black",
  crsrBlinkMode: true,
  crsrBlockMode: true,
  ps: "",
  greeting: ""
};

var term = new Terminal(conf);

var cwd = permanent_wd;
var files = {
  "": {
    "info.txt": "\n%+kName:%-k Ashish M. D'Souza\n" +
        "%+kCompany:%-k Nead Werx, Inc.\n" +
        "%+kPosition:%-k Database Developer Intern\n" +
        "%+kSchool:%-k Georgia Institute of Technology\n" +
        "%+kDegree:%-k Bachelor of Science in Computer Science\n" +
        "%+kMajor GPA:%-k 4.0\n" +
        "%+kRelevant Coursework:%-k Object-Oriented Programming, Data Structures & Algorithms, Discrete Math,\nObjects & " +
        "Design, Linear Algebra, Multivariate Calculus\n" +
        "%+kThreads:%-k Intelligence, Information Internetworks\n" +
        "%+a%+kResume%-k%-a\n\n" +
        "%+kProgramming Languages:%-k Java, Python, Ruby, Bash, SQL, JavaScript, HTML/CSS, PHP, R\n" +
        "%+kFrameworks:%-k Django, Flask, Jinja, TensorFlow, Pandas, Spring Boot, Rails, Selenium, SocketIO,\nOpenCV, Nokogiri, Java Swing, Java FX\n" +
        "%+kSoftware:%-k Apache, Android Studio, Arduino, Git, Maven, LUKS, AWS S3, Google Cloud OCR\n" +
        "%+kDatabases:%-k PostgreSQL, MySQL, MongoDB, SQLite, MariaDB, JSON\n" +
        "%+kOperating Systems:%-k Linux (Arch, Fedora, Debian, Kali, Qubes OS, Raspbian, Ubuntu), Windows, OS X\n\n" +
        "%+kEmail:%-k %+aadsouza@gatech.edu%-a, %+aashish@neadwerx.com%-a\n" +
        "%+kGitHub:%-k %+ahttps://github.com/computer-geek64%-a\n" +
        "%+kLinkedIn:%-k %+ahttps://linkedin.com/in/ashish-dsouza%-a\n" +
        "%+kInstagram:%-k %+a@computer_geek64%-a\n\n",
    "experience": {
      "nead_werx.txt": "\n%+a%+kNead Werx, Inc.%-k%-a\n" +
          "Position: Database Developer Intern\n" +
          "Description: Assisted in development of Nead Werx product, MerchLogix. Worked remotely due to\nCOVID-19.\n" +
          "Dates: May 2020 - Present\n\n",
      "oscar.txt": "\n%+a%+kOptical Science Center for Applied Research%-k%-a\n" +
          "Position: Software Engineering Research Intern, under NASA research grant\n" +
          "Desription: Worked with university researchers for two years to develop an autonomous aerial\ngreenhouse gas data " +
          "collection module with Arduino. Also allocated and analyzed satellite data with TensorFlow ML framework and " +
          "Selenium, and visualized the data on a spatio-temporal map.\n" +
          "Dates: Jun 2017 - Jun 2019\n\n"
    },
    "projects": {
      "timelock.txt": "\n%+a%+kTimeLock%-k%-a | May '20\n" +
          "Description: A database-oriented implementation of time-lock encryption, which relies on a secure,\n" +
          "verified third party to prevent falsified decryption attempts. This was developed using Java, Spring" +
          "Boot, and PostgreSQL. Time-lock encryption is still a theoretical concept, and has yet to become a\n" +
          "true, stable implementation.\n" +
          "Creators: Ashish D'Souza\n\n",
      "covid-19_survival_calculator.txt": "\n%+a%+kCOVID-19 Survival Calculator%-k%-a | Mar '20\n" +
          "Description: This calculator is a web application that allows users who have coronavirus (COVID-19) to calculate " +
          "the probability of their survival. We devised a machine learning algorithm that can\naccurately predict this value, " +
          "taking into account a wide variety of factors, including information such as pre-existing medical conditions and " +
          "local population statistics. This project was made for\nthe COVID-19 Global Hackathon (%+ahttps://covid-global-hackathon.devpost.com/%-a).\n" +
          "Creators: Ashish D'Souza, Varun Lakshmanan, Pranav Pusarla, Sharath Palathingal\n\n",
      "alrt.txt": "\n%+a%+kALRT%-k%-a | Feb '20\n" +
          "Description: ALRT (Automated Life Rescue Tracker) is an application that aims to tackle the\nchallenge of finding " +
          "victims of natural disasters when weather conditions cause power and connectionloss.\n" +
          "Creators: Ashish D'Souza, Sharath Palathingal, Pranav Pusarla, Yash Patel\n\n",
      "lockdown.txt": "\n%+a%+kLockdown%-k%-a | Jan '20\n" +
          "A facial recognition application that locks down your computer when your face is no longer " +
          "visible\nby the webcam. Lockdown was created to efficiently secure your computer when you are not actively " +
          "\nworking or paying full attention to it.\n" +
          "Creators: Ashish D'Souza\n\n",
      "watersmrt.txt": "\n%+a%+kWaterSMRT%-k%-a | Nov '19\n" +
          "Description: WaterSMRT is an application that monitors water usage in a residence, providing\nreal-time " +
          "predictions and recommendations on how to reduce water usage. WaterSMRT was built for our Global " +
          "Leadership group project.\n" +
          "Creators: Ashish D'Souza, Sharath Palathingal, Ananth Kumar, Pranav Pusarla, Yash Patel, Sai Aruru, Varun " +
          "Lakshmanan\n\n",
      "milesnap.txt": "\n%+a%+kMileSnap%-k%-a | Oct '19\n" +
          "Description: MileSnap is an application that allows a user to take a picture of a gas station sign\nand " +
          "recieve the fuel type and its corresponding price. Our team created a spatial image\npost-processing " +
          "algorithm for high-accuracy data extraction. MileSnap was developed at HackGT 6 and won the PDI Challenge " +
          "(%+ahttps://devpost.com/software/hackgt6-g74o8p%-a).\n" +
          "Creators: Ashish D'Souza, Sharath Palathingal, Pranav Pusarla, Yash Patel\n\n",
      "powershell_reverse_shell.txt": "\n%+a%+kPowerShell Reverse Shell%-k%-a | Jul '18 - Jul '19\n" +
          "Description: This project is a custom-built TCP reverse shell for Windows. The payload was developedwith " +
          "the PowerShell scripting language, and the custom handler was created with Python. The payload is " +
          "currently completely undetected by antiviruses and unblocked by firewalls.\n" +
          "Creators: Ashish D'Souza\n\n",
      "accessible_audio_keyboard.txt": "\n%+a%+kAccessible Audio Keyboard%-k%-a | Oct '18 - Apr '19\n" +
          "Description: The Accessible Audio Keyboard is a predictive audio keyboard that was developed based\non " +
          "research from a Norwegian university. This keyboard allows people with vision and movement\ndisabilities to " +
          "communicate efficiently, implementing dual binary inputs to effectively minimize therequired movement. " +
          "This project also leverages predictive word completion for optimal communication speed, using " +
          "text-to-speech to provide feedback to the user.\n" +
          "Creators: Ashish D'Souza\n\n",
      "trotline_reel_website.txt": "\n%+a%+kTrotline Reel Website%-k%-a | Feb '19 - May '19\n" +
          "Description: I created this website as a full-stack developer for a semester-long engineering\nproject in " +
          "high school.\n" +
          "Creators: Ashish D'Souza\n\n",
      "deep_learning_for_tropospheric_ozone_predictions.txt": "\n%+a%+kDeep Learning for Tropospheric Ozone Predictions%-k%-a | Oct '18 - Dec '18\n" +
          "Description: Deep Learning for Tropospheric Ozone Predictions was my senior capstone project at\nPolytech " +
          "High School. This project used TensorFlow machine learning framework to construct a deep\nneural network " +
          "to analyze and predict ground-level ozone levels. This project also leveraged\ngovernment air quality " +
          "databases with the Socrata Open Data API (SODA) and SQL-based frameworks in\nPython. The front-end of this " +
          "project was constructed using Java Swing.\n" +
          "Creators: Ashish D'Souza\n\n",
      "electrochemical_gas_sensors_integrated_with_autonomous_aerial_vehicles_for_wide_geographical_area_sensor_networks.txt": "\n%+a%+kElectrochemical Gas Sensors Integrated with Autonomous Aerial Vehicles for Wide Geographical Area\nSensor Networks%-k%-a | Jun '18 - Aug '18\n" +
          "Description: I worked with university research students at the Optical Science Center for Applied\n" +
          "Research (OSCAR) under a NASA research grant during my internship to develop this project. We\n" +
          "collectively created an autonomous aerial greenhouse gas data collection module using Arduinos that won " +
          "first place at a local university's summer research symposium.\n" +
          "Creators: Ashish D'Souza, Cedric Selph, Dontray Dowdell, Zaki Harris, Caio Azevedo\n\n"
    },
    "awards": {
      "hackgt6_pdi.txt": "\n%+kHackGT 6 PDI Award%-k\n" +
          "Description: Our team's project, MileSnap, won the PDI Sponsor Award at the HackGT 6 hackathon\n" +
          "(%+ahttps://devpost.com/software/hackgt6-g74o8p%-a).\n" +
          "Years: 2019\n\n",
      "skillsusa_computer_programming": "\n%+kSkillsUSA Computer Programming National Gold Medalist%-k\n" +
          "Description: Won the national gold medal for computer programming at the SkillsUSA 2018 National " +
          "Leadership and Skills Conference (NLSC). Also won the gold medal at the state level for 4 consecutive " +
          "years.\n" +
          "Years: 2018 (National), 2015-2019 (State)\n\n",
      "skillsusa_related_technical_math.txt": "\n%+kSkillsUSA Related Technical Math State Gold Medalist%-k\n" +
          "Description: Won the state gold medal for related technical math for two consecutive years.\n" +
          "Years: 2017-2018\n\n",
      "science_fair.txt": "\n%+kRegional Multi-State Science Fair First Place%-k\n" +
          "Description: Won first place with the project %+eUsing Supervised Machine Learning Algorithms for\n" +
          "Accurate and Efficient Ground-level Ozone Predictions%-e at the Delaware Valley Science Fair (DVSF), a\n" +
          "regional multi-state science fair, in 2018. Was also awarded a Certificate of Outstanding\nAchievement by " +
          "the American Meteorological Society, as well as $140,000 in scholarships to various\ncolleges. " +
          "Additionally won third place with the project Developing a Simpler Method for Drawing\nPerspective " +
          "Projections in 2017.\n" +
          "Years: 2017, 2018\n\n",
      "pvsa.txt": "\n%+kPresident's Volunteer Service Award%-k\n" +
          "Description: Received the President's Volunteer Service Award for completing over 100 hours of\nservice " +
          "over the span of one year.\n" +
          "Years: 2017\n\n",
      "cyberpatriot.txt": "\n%+kCyberPatriot State First Place%-k\n" +
          "Description: Won first place in the CyberPatriot State Competition in 2017.\n" +
          "Years: 2017\n\n"
    }
  }
};

var link_hrefs = {
  "Parent Directory": "..?v",
  "Resume": "/files/Resume.pdf",
  "adsouza@gatech.edu": "mailto:adsouza@gatech.edu",
  "ashish@neadwerx.com": "mailto:ashish@neadwerx.com",
  "@computer_geek64": "https://instagram.com/computer_geek64",
  "Nead Werx, Inc.": "https://www.neadwerx.com/",
  "Optical Science Center for Applied Research": "https://oscar.desu.edu/",
  "TimeLock": "https://github.com/computer-geek64/timelock",
  "COVID-19 Survival Calculator": "https://github.com/computer-geek64/covid19-survival-calculator",
  "ALRT": "https://github.com/computer-geek64/alrt",
  "Lockdown": "https://github.com/computer-geek64/lockdown",
  "WaterSMRT": "https://github.com/computer-geek64/watersmrt",
  "MileSnap": "https://github.com/computer-geek64/milesnap",
  "PowerShell Reverse Shell": "https://github.com/computer-geek64/ducky",
  "Accessible Audio Keyboard": "https://ashishdsouza.com/accessible-audio-keyboard",
  "Trotline Reel Website": "https://ashishdsouza.com/trotline-reel/web",
  "Deep Learning for Tropospheric Ozone Predictions": "https://github.com/computer-geek64/MTD",
  "Electrochemical Gas Sensors Integrated with Autonomous Aerial Vehicles for Wide Geographical Area": "/files/Electrochemical%20Gas%20Sensors%20Integrated%20with%20Autonomous%20Aerial%20Vehicles%20for%20Wide%20Geographical%20Area%20Sensor%20Networks.pdf",
  "Sensor Networks": "/files/Electrochemical%20Gas%20Sensors%20Integrated%20with%20Autonomous%20Aerial%20Vehicles%20for%20Wide%20Geographical%20Area%20Sensor%20Networks.pdf"
  //"Electrochemical Gas Sensors Integrated with Autonomous Aerial Vehicles for Wide Geographical Area Sensor Networks": "/files/Electrochemical%20Gas%20Sensors%20Integrated%20with%20Autonomous%20Aerial%20Vehicles%20for%20Wide%20Geographical%20Area%20Sensor%20Networks.pdf"
};

var helpPage = [
  "%+kls%-k                   List directory contents",
  "%+kcd%-k %+tdir%-t               Change directory",
  "%+kcat%-k %+tfile%-t             Print file contents",
  "%+kpwd%-k                  Print working directory",
  "%+kwhoami%-k               Display information about Ashish",
  "%+kecho%-k %+ttext%-t            Print text",
  "%+kclear%-k                Clear the screen",
  "%+khelp%-k                 Show this help screen",
  "%+kexit%-k                 Exit the terminal",
  "%+ktux%-k                  ?????"
];

function getPublicIP() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://ipecho.net/plain", false);
  xmlHttp.send();
  return xmlHttp.responseText;
}

function getBrowser() {
  var userAgent = window.navigator.userAgent;
  if(userAgent.includes("Opera")) {
    return "Opera";
  }
  else if(userAgent.includes("Chrome")) {
    return "Chrome";
  }
  else if(userAgent.includes("Safari")) {
    return "Safari";
  }
  else if(userAgent.includes("Firefox")) {
    return "Firefox";
  }
  else if(userAgent.includes("MSIE")) {
    return "Internet Explorer";
  }
  else {
    return "Chrome";
  }
}

function getTime() {
  var today = new Date();
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var output = days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + " ";

  if(today.getHours() < 10) {
    output += "0";
  }
  output += today.getHours() + ":";

  if(today.getMinutes() < 10) {
    output += "0";
  }
  output += today.getMinutes() + ":";

  if(today.getSeconds() < 10) {
    output += "0";
  }
  output += today.getSeconds();

  output += " " + today.getFullYear();
  return output;
}

function setLinks() {
  var links = document.querySelectorAll("a[href='']");
  for(var j = 0; j < links.length; j++) {
    var text = links[j].innerText.replace(new RegExp(String.fromCharCode(160), "g"), " ");
    if(text in link_hrefs) {
      links[j].href = link_hrefs[text];
    }
    else {
      links[j].href = text;
    }
  }
}

function scrollToLine() {
  document.getElementById("term_r" + term.r).scrollIntoView(false);
}

function getAccessibleDirs() {
  var file = files;
  var path = permanent_wd.split("/");
  if(path[path.length - 1] == "") {
    path = path.slice(0, -1);
  }
  for(var i = 0; i < path.length; i++) {
    if(Object.keys(file).includes(path[i]) && typeof file[path[i]] != "string") {
      var file = file[path[i]];
    }
    else {
      term.write("Access denied.");
      return;
    }
  }
  var output = [];
  for(var i = 0; i < Object.keys(file).length; i++) {
    if(file[Object.keys(file)[i]] != "string") {
      output.push(Object.keys(file)[i]);
    }
  }
  return output;
}

function ls() {
  var file = files;
  var path = cwd.split("/");
  if(path[path.length - 1] == "") {
    path = path.slice(0, -1);
  }

  for(var i = 0; i < path.length; i++) {
    if(Object.keys(file).includes(path[i])) {
      var file = file[path[i]];
    }
    else {
      term.write("Access denied.");
      return;
    }
  }

  var output = [];
  for(var i = 0; i < Object.keys(file).length; i++) {
    if(typeof file[Object.keys(file)[i]] == "string") {
      output.push(Object.keys(file)[i]);
    }
    else if(getAccessibleDirs().includes(Object.keys(file)[i])) {
      output.push("%+a%+k" + Object.keys(file)[i] + "/%-k%-a");
    }
    else {
      output.push(Object.keys(file)[i] + "/");
    }
  }

  if(cwd != "/") {
    if(permanent_wd == "/") {
      output.unshift("..");
    }
    else {
      output.unshift("%+a%+kParent Directory%-k%-a");
    }
  }

  term.write(output.join("\n"));
  term.newLine();
  setLinks();
  return;
}

function cd(dir) {
  if(dir == "..") {
    if(cwd == "/") {
      cwd = "/";
    }
    else {
      cwd = cwd.split("/").slice(0, -1).join("/");
      if(cwd == "") {
        cwd = "/";
      }
    }
    term.ps = "%c(#ff0000)%+kashish@" + ip + "%-k%c(clear):%c(#2e71e6)%+d" + cwd + "%c(clear)%-d$";
    return;
  }
  if(dir == ".") {
    return;
  }
  if(!dir.startsWith("/")) {
    if(cwd == "/") {
      dir = "/" + dir;
    }
    else {
      dir = cwd + "/" + dir;
    }
  }
  var file = files;
  var path = dir.split("/");
  if(path.length > 1 && path[path.length - 1] == "") {
    path = path.slice(0, -1);
  }
  for(var i = 0; i < path.length; i++) {
    if(Object.keys(file).includes(path[i]) && typeof file[path[i]] != "string") {
      var file = file[path[i]];
    }
    else {
      term.write("bash: " + dir + ": No such directory");
      return;
    }
  }
  cwd = path.join("/");
  if(cwd == "") {
    cwd = "/";
  }
  term.ps = "%c(#ff0000)%+kashish@" + ip + "%-k%c(clear):%c(#2e71e6)%+d" + cwd + "%c(clear)%-d$";
  return;
}

function cat(filename) {
  if(!filename.startsWith("/")) {
    if(cwd == "/") {
      filename = "/" + filename;
    }
    else {
      filename = cwd + "/" + filename;
    }
  }
  var file = files;
  var path = filename.split("/");
  if(path.length > 1 && path[path.length - 1] == "") {
    path = path.slice(0, -1);
  }
  for(var i = 0; i < path.length; i++) {
    if(Object.keys(file).includes(path[i])) {
      var file = file[path[i]];
    }
    else {
      var output = false;
      if(i == path.length - 1 && path[i].split("*").length == 2) {
        var start = path[i].split("*")[0];
        var end = path[i].split("*")[1];
        for(var key in file) {
          if(key.startsWith(start) && key.endsWith(end) && typeof file[key] == "string") {
            output = true;
            term.write(file[key]);
          }
        }
        if(output) {
          setLinks();
          return;
        }
      }
      term.write("bash: " + filename + ": No such file");
      return;
    }
  }
  if(typeof file == "string") {
    term.write(file);
    setLinks();
    return;
  }
  else {
    term.write("bash: " + filename + ": No such file");
    return;
  }
}

function termHandler() {
  var line = this.lineBuffer;
  this.newLine();
  if(line == "help") {
    this.write(helpPage);
  }
  else if(line == "clear") {
    this.clear();
  }
  else if(line == "exit") {
    this.close();
    window.location.reload();
    return;
  }
  else if(line == "ls") {
    ls();
  }
  else if(line.startsWith("cd")) {
    cd(line.slice(3));
  }
  else if(line == "pwd") {
    this.write(cwd);
  }
  else if(line.startsWith("cat")) {
    cat(line.slice(4));
  }
  else if(line == "whoami") {
    this.write("An undergraduate computer science student at Georgia Tech.");
  }
  else if(line.startsWith("echo")) {
    this.write(line.slice(5));
  }
  else if(line.includes("tux")) {
    this.write(" _____________");
    this.newLine();
    this.write("< I <3 Linux! >");
    this.newLine();
    this.write(" -------------");
    this.newLine();
    this.write("   \\");
    this.newLine();
    this.write("    \\");
    this.newLine();
    this.write("        .--.");
    this.newLine();
    this.write("       |o_o |");
    this.newLine();
    this.write("       |:_/ |");
    this.newLine();
    this.write("      //   \\ \\");
    this.newLine();
    this.write("     (|     | )");
    this.newLine();
    this.write("    /'\\_   _/`\\");
    this.newLine();
    this.write("    \\___)=(___/");
    this.newLine();
    this.newLine();
  }
  else if(line != "") {
    this.write("bash: " + line + ": command not found");
  }

  this.prompt();

  setLinks();

  scrollToLine();
}
