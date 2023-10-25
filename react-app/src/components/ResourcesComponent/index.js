// import './Resources.css'
import * as React from 'react'
import { useSelector } from 'react-redux';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router-dom'
import mainListItems from '../UserDashboard/listItems'
import PersonIcon from '@mui/icons-material/Person';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import './Resources.css'

// Resource Types:
//  - Documentation
//  - Tutorials
//  - Courses
//  - Services
//  - Tools
//  - Applications & Plugins
//  - Troubleshooting / Debugging
//  - Community & News
//  - Helpful Info
//  - Practice

// Table Columns:
//  - Resource Name
//  - Link
//  - Resource Type
//  - Related Languages

function createData(resourceName, link, resourceType, relatedLanguages) {
  return { resourceName, link, resourceType, relatedLanguages };
}

function createData2(challengeName, link, resourceType, relatedLanguages, difficulty) {
  return { challengeName, link, resourceType, relatedLanguages, difficulty }
}

function createData3(resourceName, link, resourceType) {
  return { resourceName, link, resourceType }
}

function createData4(resourceName, link, relatedLanguages) {
  return { resourceName, link, relatedLanguages }
}

const rows1 = [
  createData('LeetCode', "https://leetcode.com", "Practice", "All"),
  createData('NeetCode', "https://neetcode.io", "Practice", "All"),
  createData('Structy', "https://structy.net", "Practice", "All"),
  createData('"Data Structure Visualization"', "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html", "Helpful Info", "All"),
  createData('Big-O Cheat Sheet', "https://www.bigocheatsheet.com/", "Helpful Info", "All"),
  createData('VisuAlgo', "https://visualgo.net/en", "Tools, Helpful Info", "All"),
  createData('Time Complexity Analysis of Array', "https://iq.opengenus.org/time-complexity-of-array/", "Helpful Info", "All")
];

const rows2 = [
  createData2('Build a Binary Search Tree', "https://discuss.codecademy.com/t/challenge-build-and-test-balance-of-a-binary-search-tree/84300?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*l7a2o3*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.", "Practice", "All", "Easy"),
  createData2('FizzBuzz', "https://discuss.codecademy.com/t/challenge-the-classic-fizzbuzz-challenge/82165?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*moppjj*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.", "Practice", "All", "Easy"),
  createData2('Hello World Variations', "https://discuss.codecademy.com/t/challenge-the-hello-world-challenge/24751/2?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*p5ea6j*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.", "Practice", "All", "Easy"),
  createData2('Code in a New Language', "https://discuss.codecademy.com/t/challenge-code-in-another-language-challenge/24823?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*p5ea6j*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjAuMTY5Nzg1MTQ0Ni42MC4wLjA.", "Practice", "All", "Easy"),
  createData2('String Reversal', "https://discuss.codecademy.com/t/challenge-reverse-words/83796?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*jtjm0i*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Easy"),
  createData2('Fibonacci', "https://discuss.codecademy.com/t/challenge-fibonacci-finder/129506?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*jtjm0i*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Easy"),
  createData2('isPrime', "https://discuss.codecademy.com/t/challenge-prime-number-printer/101926?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*l3h12u*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Easy"),
  createData2('Check if Binary Search Tree is Valid', "https://discuss.codecademy.com/t/challenge-build-and-test-balance-of-a-binary-search-tree/84300?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1wejfgi*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Intermediate"),
  createData2('Reverse Word Order w/ Punctuation', "https://discuss.codecademy.com/t/challenge-reverse-words/83796?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1wejfgi*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Intermediate"),
  createData2('Find Shortest Transformation', "https://discuss.codecademy.com/t/challenge-word-transformation/84306?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1ygh4sm*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "Python", "Intermediate"),
  createData2('Find nth Number in Fibonacci', "https://discuss.codecademy.com/t/challenge-word-transformation/84306?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1ygh4sm*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Intermediate"),
  createData2('Print All Prime Nums in String', "https://discuss.codecademy.com/t/challenge-word-transformation/84306?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1ygh4sm*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Intermediate"),
  createData2('Insert List Into Binary Tree O(n log n)', "https://discuss.codecademy.com/t/challenge-build-and-test-balance-of-a-binary-search-tree/84300?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1ed0kcl*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Hard"),
  createData2('Reverse Word Order w/ Punctuation O(n)', "https://discuss.codecademy.com/t/challenge-reverse-words/83796?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1t8tkw1*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MzYxMS4yLjEuMTY5Nzg1MzYzOS4zMi4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Hard"),
  createData2('Find nth Number in Fibonacci O(n)', "https://discuss.codecademy.com/t/challenge-fibonacci-finder/129506?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1t8tkw1*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MzYxMS4yLjEuMTY5Nzg1MzYzOS4zMi4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Hard"),
  createData2('Create a Web Page for Your Favorite Band', "https://discuss.codecademy.com/t/challenge-build-a-web-page-for-your-favorite-band/505142?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1os64d9*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MzYxMS4yLjEuMTY5Nzg1MzYzOS4zMi4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Variable"),
  createData2('Recreate Magazine Layout w/ Semantic HTML & Flexbox', "https://discuss.codecademy.com/t/challenge-recreate-a-magazine-layout-using-semantic-html-and-css-flexbox/549635?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1j4zmkx*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MzYxMS4yLjEuMTY5Nzg1MzYzOS4zMi4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Variable"),
  createData2('Build a Static Portfolio Site', "https://discuss.codecademy.com/t/challenge-build-a-static-portfolio-site/535417?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1l4cvx1*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MzYxMS4yLjEuMTY5Nzg1MzYzOS4zMi4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Variable"),
  createData2('Maximize Stock Trading Profit', "https://discuss.codecademy.com/t/challenge-maximize-stock-trading-profit/86193?utm_source=ccblog&utm_medium=ccblog&utm_campaign=ccblog&utm_content=cw_20_code_challenges_blog&_gl=1*1l4cvx1*_ga*MTQyMTMzNzMuMTY5Nzg1MTQ0Ng..*_ga_3LRZM6TM9L*MTY5Nzg1MzYxMS4yLjEuMTY5Nzg1MzYzOS4zMi4wLjA.*_ga_T0PG03GR11*MTY5Nzg1MTQ0Ni4xLjEuMTY5Nzg1MTY4Ni4yOS4wLjA.", "Practice", "All", "Variable")
];

const rows3 = [
  createData('Women Who Code', "https://www.womenwhocode.com/", "Community & News", "All"),
  createData('Hashnode', "https://hashnode.com/", "Community & News", "All"),
  createData('Hackernoon', "https://hackernoon.com/", "Community & News", "All"),
  createData('Hacker News', "https://news.ycombinator.com/", "Community & News", "All"),
  createData('Stack Overflow', "https://stackoverflow.com/", "Community & News", "All"),
  createData('Code Project', "https://www.codeproject.com/", "Community & News", "All"),
  createData('Reddit - r/Coding', "https://www.reddit.com/r/coding/", "Community & News", "All"),
  createData('DEV Community', "https://dev.to/", "Community & News", "All"),
  createData('DevHubby', "https://devhubby.com/", "Community & News", "All")
];

const rows4 = [
  createData('TLDR Newsletter', "https://tldr.tech/", "Community & News", "All"),
  createData('SD Times', "https://sdtimes.com/", "Community & News", "All"),
  createData('InfoWorld', "https://www.infoworld.com/category/application-development/", "Community & News", "All"),
  createData('InfoQ', "https://www.infoq.com/", "Community & News", "All"),
  createData('The New Stack', "https://thenewstack.io/software-development/", "Community & News", "All"),
  createData('Developer Tech News', 'https://www.developer-tech.com/', 'Community & News', 'All'),
  createData('Software Engineering Daily', 'https://softwareengineeringdaily.com/', 'Community & News', 'All'),
  createData('Wired', 'https://www.wired.com/tag/developers/', 'Community & News', 'All'),
  createData('Podcast - The Changelog', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4574101&q=site:https%3A%2F%2Fchangelog.com%2Fpodcast%2Ffeed', 'Community & News', 'All'),
  createData('Podcast - Software Engineering Daily', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5015752&q=site:https%3A%2F%2Fsoftwareengineeringdaily.com%2Ffeed%2Fpodcast', 'Community & News', 'All'),
  createData('Podcast - Software Engineering Radio', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=1153451&q=site:https%3A%2F%2Ffeeds.feedburner.com%2Fse-radio%3Fq%3Drss', 'Community & News', 'All'),
  createData('Podcast - The Cloudcast', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4978915&q=site:https%3A%2F%2Fwww.thecloudcast.net%2Ffeeds%2Fposts%2Fdefault%3Falt%3Drss', 'Community & News', 'All'),
  createData('Podcast - Software Engineering Institute (SEI)', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5308409&q=site:https%3A%2F%2Fcmu-sei-podcasts.libsyn.com%2Frss', 'Community & News', 'All'),
  createData('Podcast - Software Engineering Unlocked', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5308410&q=site:https%3A%2F%2Ffeeds.simplecast.com%2FK1_mv0CJ', 'Community & News', 'All'),
  createData('Podcast - CoRecursive', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4978952&q=site:https%3A%2F%2Fcorecursive.libsyn.com%2Ffeed', 'Community & News', 'All'),
  createData('Podcast - Conversations about Software Engineering', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4978948&q=site:https%3A%2F%2Fwww.case-podcast.org%2Ffeed%2Fmp3', 'Community & News', 'All'),
  createData('Podcast - The Cynical Developer', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5181869&q=site:https%3A%2F%2Fcynicaldeveloper.libsyn.com%2Frss', 'Community & News', 'All'),
  createData('Podcast - The Rabit Hole', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5181866&q=site:https%3A%2F%2Ftherabbithole.libsyn.com%2Frss', 'Community & News', 'All'),
  createData('Podcast - Software Engineering Digest', 'https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4978985&q=site:https%3A%2F%2Ffeeds.feedburner.com%2Fsoftwareengineeringdigest', 'Community & News', 'All'),
  createData('YouTube - freeCodeCamp.org', 'https://www.youtube.com/@freecodecamp', 'Community & News', 'All'),
  createData('YouTube - Fireship', 'https://www.youtube.com/@Fireship', 'Community & News', 'All'),
  createData('YouTube - The Net Ninja', 'https://www.youtube.com/@NetNinja', 'Community & News', 'All'),
  createData('YouTube - Andy Sterkowitz', 'https://www.youtube.com/@AndySterkowitz', 'Community & News', 'All'),
  createData('YouTube - Alex Hyatt', 'https://www.youtube.com/@alexhyettdev', 'Community & News', 'All'),
  createData('YouTube - ArjanCodes', 'https://www.youtube.com/@ArjanCodes/videos', 'Community & News', 'All'),
  createData('YouTube - Nick Chapsas', 'https://www.youtube.com/@nickchapsas', 'Community & News', 'All'),
  createData('YouTube - Code with Ania Kubów', 'https://www.youtube.com/@AniaKubow', 'Community & News', 'All'),
  createData('YouTube - Coding with John', 'https://www.youtube.com/@CodingWithJohn', 'Community & News', 'All'),
  createData('YouTube - Coderbyte', 'https://www.youtube.com/@CoderbyteDevelopers', 'Community & News', 'All'),
  createData('YouTube - Alvin the Programmer', 'https://www.youtube.com/@AlvintheProgrammer', 'Community & News', 'All'),
  createData('YouTube - Back to Back SWE', 'https://www.youtube.com/@BackToBackSWE', 'Community & News', 'All'),
  createData('YouTube - Web Dev Simplified', 'https://www.youtube.com/@WebDevSimplified', 'Community & News', 'All'),
  createData('YouTube - CBT Nuggets', 'https://www.youtube.com/@cbtnuggets', 'Community & News', 'All'),
  createData('YouTube - Programming with Mosh', 'https://www.youtube.com/@programmingwithmosh', 'Community & News', 'All'),
  createData('YouTube - Leela Web Dev', 'https://www.youtube.com/@LeelaWebDev', 'Community & News', 'All'),
  createData('YouTube - Simplilearn', 'https://www.youtube.com/@SimplilearnOfficial', 'Community & News', 'All'),
];

const rows5 = [
  createData('Angular Documentation', 'https://angular.io/docs', 'Documentation', 'TypeScript'),
  createData('John Lindquist\'s Video Tutorials on Egghead.io', 'https://egghead.io/browse/frameworks/angularjs', 'Tutorials', 'TypeScript'),
  createData('Build a Gmail Clone', 'https://www.thinkful.com/learn/angularjs-tutorial-build-a-gmail-clone/', 'Tutorials', 'TypeScript'),
  createData('NgRx Complex Forms with Jesse Sanders', 'https://www.youtube.com/watch?v=f6XpwaLmJ3U', 'Helpful Info', 'TypeScript'),
  createData('Advanced Caching with RxJS with Dominic Elm', 'https://youtu.be/j7Gb1qw23ks', 'Tutorials', 'TypeScript'),
  createData('Advanced NgRx Recipes with Xavier Lozinguez', 'https://youtu.be/aBktwqlqzKE', 'Helpful Info', 'TypeScript'),
  createData('Angular: From Theory to Practice', 'https://youtu.be/gW0R4Bic8gw', 'Tutorials', 'TypeScript'),
  createData('Angular Full Course in 6 Hours with Edureka', 'https://youtu.be/gW0R4Bic8gw', 'Courses', 'TypeScript'),
  createData('Angular - The Complete Guide (2022 Edition) by Udemy', 'https://www.udemy.com/course/the-complete-guide-to-angular-2/', 'Courses', 'TypeScript'),
  createData('Angular Fundamental Courses', 'https://ultimatecourses.com/courses/angular', 'Courses', 'TypeScript'),
  createData('Learn Angular - Crash Course', 'https://www.freecodecamp.org/news/learn-angular-full-course/', 'Courses', 'TypeScript'),
  createData('Angular: Getting Started with PluralSights', 'https://www.pluralsight.com/courses/angular-2-getting-started-update', 'Courses', 'TypeScript'),
  createData('Medium - Angular', 'https://medium.com/tag/angular', 'Helpful Resources', 'TypeScript'),
  createData('Podcast - Adventures in Angular', 'https://topenddevs.com/podcasts/adventures-in-angular', 'Helpful Info', 'TypeScript'),
];

const rows6 = [
  createData('ReactJS Tutorial', 'https://reactjs.org/tutorial/tutorial.html', 'Tutorials', 'JavaScript'),
  createData('React Official Website', 'https://reactjs.org/', 'Documentation', 'JavaScript'),
  createData('React Documentation', 'https://reactjs.org/docs', 'Documentation', 'JavaScript'),
  createData('React GitHub', 'https://github.com/facebook/react', 'Documentation', 'JavaScript'),
  createData('Reactiflux Discord Channel', 'http://www.reactiflux.com/', 'Communities & News', 'JavaScript'),
  createData('React StackOverflow', 'http://stackoverflow.com/questions/tagged/reactjs', 'Communities & News', 'JavaScript'),
  createData('React Twitter', 'https://twitter.com/reactjs', 'Communities & News', 'JavaScript'),
  createData('Reactiflux', 'https://www.reactiflux.com/', 'Communities & News', 'JavaScript'),
  createData('React-Redux Resources', 'https://github.com/markerikson/react-redux-links', 'Tutorials', 'JavaScript'),
  createData('Awesome React', 'https://github.com/enaqx/awesome-react', 'Helpful Info', 'JavaScript'),
  createData('Awesome React Components', 'https://github.com/brillout/awesome-react-components', 'Helpful Info', 'JavaScript'),
  createData('Awesome React Talks', 'https://github.com/tiaanduplessis/awesome-react-talks', 'Helpful Info', 'JavaScript'),
  createData('Awesome React Videos', 'https://www.awesomereact.com/', 'Helpful Info', 'JavaScript'),
  createData('Hero35 React Hub', 'https://hero35.com/topic/react', 'Helpful Info', 'JavaScript'),
  createData('Material UI (MUI)', 'https://github.com/mui-org/material-ui', 'UI Libraries', 'JavaScript'),
  createData('Blueprint', 'https://github.com/palantir/blueprint', 'UI Libraries', 'JavaScript'),
  createData('React-bootstrap', 'https://github.com/react-bootstrap/react-bootstrap', 'UI Libraries', 'JavaScript'),
  createData('Reactstrap', 'https://github.com/reactstrap/reactstrap', 'UI Libraries', 'JavaScript'),
  createData('Ant-design', 'https://github.com/ant-design/ant-design', 'UI Libraries', 'JavaScript'),
  createData('Chakra-ui', 'https://github.com/chakra-ui/chakra-ui/', 'UI Libraries', 'JavaScript'),
  createData('Semantic UI React', 'https://github.com/chakra-ui/chakra-ui/', 'UI Libraries', 'JavaScript'),
  createData('Evergreen', 'https://github.com/segmentio/evergreen', 'UI Libraries', 'JavaScript'),
  createData('Fluent UI', 'https://github.com/microsoft/fluentui', 'UI Libraries', 'JavaScript'),
  createData('Grommet', 'https://github.com/grommet/grommet', 'UI Libraries', 'JavaScript'),
  createData('Rebass', 'https://github.com/rebassjs/rebass', 'UI Libraries', 'JavaScript'),
  createData('Reakit', 'https://github.com/reakit/reakit', 'UI Libraries', 'JavaScript'),
  createData('Rsuite', 'https://github.com/rsuite/rsuite', 'UI Libraries', 'JavaScript'),
  createData('Primereact', 'https://github.com/primefaces/primereact', 'UI Libraries', 'JavaScript'),
  createData('Eui', 'https://github.com/elastic/eui', 'UI Libraries', 'JavaScript'),
  createData('React-spectrum', 'https://github.com/adobe/react-spectrum', 'UI Libraries', 'JavaScript'),
  createData('React-bulma-components', 'https://github.com/couds/react-bulma-components', 'UI Libraries', 'JavaScript'),
  createData('Mantine', 'https://github.com/mantinedev/mantine', 'UI Libraries', 'JavaScript'),
  createData('Next.js', 'https://github.com/vercel/next.js', 'Frameworks', 'JavaScript'),
  createData('Gatsby.js', 'https://github.com/gatsbyjs/gatsby', 'Frameworks', 'JavaScript'),
  createData('React Admin', 'https://github.com/marmelab/react-admin', 'Frameworks', 'JavaScript'),
  createData('Blitz', 'https://blitzjs.com/', 'Frameworks', 'JavaScript'),
  createData('Materio - MUI React Next.js Admin Template', 'https://themeselection.com/products/materio-mui-react-nextjs-admin-template/', 'Commercial Projects', 'JavaScript'),
  createData('Vuexy - Vuejs, React - Next.js, HTML, Laravel & Asp.Net Admin Dashboard Template', 'https://1.envato.market/vusax_admin', 'Commercial Projects', 'JavaScript'),
  createData('Jumbo React Redux Admin Template', 'https://themeselection.com/go/jumbo-react-react-redux-material-bootstrap-admin-template/', 'Commercial Projects', 'JavaScript'),
  createData('Dnote Command Line Notebook', 'https://www.getdnote.com/', 'Commercial Projects', 'JavaScript'),
  createData('Kibana', 'https://www.elastic.co/kibana/', 'Commercial Projects', 'JavaScript'),
  createData('EasyDev', 'https://themeselection.com/go/easydev-developer-friendly-react-redux-bootstrap-4-admin-template-seed-project/', 'Commercial Projects', 'JavaScript'),
  createData('React Select', 'https://github.com/jedwatson/react-select', 'Open Source Projects', 'JavaScript'),
  createData('DevHub', 'https://github.com/devhubapp/devhub', 'Open Source Projects', 'JavaScript'),
  createData('React Spring', 'https://github.com/react-spring/react-spring', 'Open Source Projects', 'JavaScript'),
  createData('ArchitectUI React', 'https://dashboardpack.com/theme-details/architectui-react-dashboard-free/', 'Open Source Projects', 'JavaScript'),
  createData('Take Note', 'https://github.com/taniarascia/takenote', 'Open Source Projects', 'JavaScript'),
  createData('Write with Me', 'https://github.com/dabit3/write-with-me', 'Open Source Projects', 'JavaScript'),
  createData('ReactJS Crash Course', 'https://www.youtube.com/watch?v=w7ejDZ8SWv8', 'Tutorials', 'JavaScript'),
  createData('ReactJS Course for Beginners', 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ', 'Tutorials', 'JavaScript'),
  createData('React Crash Course for Beginners by Academind', 'https://www.youtube.com/watch?v=Dorf8i6lCuk', 'Tutorials', 'JavaScript'),
  createData('ReactJS Tutorial for Beginners', 'https://www.youtube.com/watch?v=-cMqr9HpZ-Y', 'Tutorials', 'JavaScript'),
  createData('What\'s New in React 18', 'https://www.youtube.com/watch?v=bpVRWrrfM1M', 'Helpful Info', 'JavaScript'),
  createData('What you NEED to Know About React 18', 'https://www.youtube.com/watch?v=uOGImWM85Uw', 'Helpful Info', 'JavaScript'),
  createData('ReactJS Roadmap for Developers', 'https://dev.to/theme_selection/reactjs-roadmap-for-developers-2824', 'Helpful Info', 'JavaScript'),
  createData('React Project Ideas for Beginners', 'https://themeselection.com/react-project-ideas-for-beginners/', 'Helpful Info', 'JavaScript'),
  createData('React Boilerplate', 'https://themeselection.com/react-boilerplate/', 'Helpful Info', 'JavaScript'),
  createData('The Best 10+ React Developer Tools 2021', 'https://themeselection.com/react-developer-tools/', 'Helpful Info', 'JavaScript')
  // createData('Learn React', 'https://react.dev/learn', 'Documentation', 'JavaScript'),
  // createData('Tutorial: Tic-Tac-Toe', 'https://react.dev/learn/tutorial-tic-tac-toe', 'Tutorials', 'JavaScript'),
  // createData('React API Reference Docs', 'https://react.dev/reference/react', 'Documentation', 'JavaScript'),
  // createData('The Beginner\'s Guide to React', 'https://egghead.io/courses/the-beginner-s-guide-to-react', 'Courses', 'JavaScript'),
  // createData('Epic React', 'https://epicreact.dev/', 'Courses', 'JavaScript'),
  // createData('Learn React: Codecademy', 'https://www.codecademy.com/learn/react-101', 'Courses', 'JavaScript'),
  // createData('ReactResources', 'https://reactresources.com/', 'Tutorials', 'JavaScript'),
  // createData('React Basic in just 1 Hour', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Freact-basic-in-just-1-hour%2F', 'Courses', 'JavaScript'),
  // createData('React Fundamentals', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Freact-fundamentals%2F', 'Courses', 'JavaScript'),
  // createData('React with Redux, React-Router, Hooks, and AuthO', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmodern-react%2F', 'Courses', 'JavaScript'),
  // createData('Build Your First ReactJS Application', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fbuild-your-first-react-js-application%2F', 'Courses', 'JavaScript'),
  // createData('React for Beginners with Hooks - 2023', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Freact-for-beginners-with-hooks-2021%2F', 'Courses', 'JavaScript'),
  // createData('Build an Online Store Using AWS, React, and Stripe', 'https://youtu.be/JgwI22y_eFA', 'Tutorials', 'JavaScript'),
];

const rows7 = [
  createData('Svelte.dev Docs', 'https://svelte.dev/docs', 'Documentation', 'JavaScript'),
  createData('Svelte.dev Tutorial', 'https://svelte.dev/tutorial/basics', 'Tutorials', 'JavaScript'),
  createData('SvelteKit Docs', 'https://kit.svelte.dev/docs/introduction', 'Documentation', 'JavaScript'),
  createData('Learn Svelte.dev', 'https://learn.svelte.dev/tutorial/welcome-to-svelte', 'Tutorials', 'JavaScript'),
  createData('Svelte Society', 'https://www.youtube.com/c/SvelteSociety', 'Helpful Info', 'JavaScript'),
  createData('lihautan', 'https://www.youtube.com/c/lihautan', 'Tutorials', 'JavaScript'),
  createData('Joy of Code', 'https://www.youtube.com/c/JoyofCodeDev', 'Tutorials', 'JavaScript'),
  createData('Scott Spence SvelteKit Playlist', 'https://www.youtube.com/playlist?list=PLGi_uHe_v04AuMoPAtBN3ULy7zhFILKRQ', 'Tutorials', 'JavaScript'),
  createData('Level Up Tuts', 'https://www.youtube.com/c/LevelUpTuts', 'Tutorials', 'JavaScript'),
  createData('Beginner Guide to SvelteKit', 'https://www.youtube.com/playlist?list=PLtgYhHmUIr3qDB2eTzY-nuBH1W5tOK8a4', 'Courses', 'JavaScript'),
  createData('Svelte Tutorials by Script Raccoon Playlist', 'https://www.youtube.com/playlist?app=desktop&list=PL1LHMFscti8t4KyuLYSDLpuJP-8Im4P42', 'Tutorials', 'JavaScript'),
  createData('Svelte Discord Channel', 'https://discord.gg/svelte', 'Community & News', 'JavaScript'),
  createData('Svelte Sirens', 'https://sveltesirens.dev/', 'Community & News', 'JavaScript'),
  createData('Svelte Summit', 'https://www.sveltesummit.com/', 'Helpful Info', 'JavaScript'),
  createData('Made with Svelte', 'https://madewithsvelte.com/', 'Packages & Utilities', 'JavaScript'),
  createData('Svelte Add', 'https://github.com/svelte-add/svelte-add', 'Packages & Utilities', 'JavaScript'),
  createData('Svelte Actions', 'https://github.com/sw-yx/svelte-actions', 'Packages & Utilities', 'JavaScript'),
  createData('Svelte MultiSelect', 'https://svelte-multiselect.netlify.app/', 'Packages & Utilities', 'JavaScript'),
  createData('Svelte-tiny-virtual-list', 'https://github.com/Skayo/svelte-tiny-virtual-list', 'Packages & Utilities', 'JavaScript'),
  createData('Svelte Notifications', 'https://svelte-notifications.netlify.app/', 'Packages & Utilities', 'JavaScript'),
  createData('mdsvex', 'https://mdsvex.pngwn.io/', 'Packages & Utilities', 'JavaScript'),
  createData('Vest', 'https://vestjs.dev/', 'Packages & Utilities', 'JavaScript'),
  createData('vitest-svelte-kit', 'https://github.com/nickbreaton/vitest-svelte-kit', 'Packages & Utilities', 'JavaScript')
];

const rows8 = [
  createData('Best of Next.js', 'https://www.bestofnextjs.com/', 'Helpful Info', 'JavaScript'),
  createData('Next.js Documentation', 'https://nextjs.org/docs', 'Documentation', 'JavaScript'),
  createData('The Next.js Handbook', 'https://www.freecodecamp.org/news/the-next-js-handbook/', 'Helpful Info', 'JavaScript'),
  createData('Awesome Next.js', 'https://awesomenextjs.com/', 'Tutorials', 'JavaScript'),
  createData('Complete Next.js Developer in 2022: Zero to Mastery', 'https://academy.zerotomastery.io/p/learn-next-js', 'Courses', 'JavaScript'),
  createData('Mastering Next.js', 'https://masteringnextjs.com/', 'Helpful Info', 'JavaScript'),
  createData('Getting Started with Next.js', 'https://flaviocopes.com/nextjs/', 'Tutorials', 'JavaScript'),
  createData('Complete Next.js with React & Node - Beautiful Portfolio App', 'https://academy.eincode.com/courses/complete-next-js-with-react-node-beautiful-portfolio-app', 'Courses', 'JavaScript'),
  createData('Building Server-Side Rendered React Apps for Beginners', 'https://www.pluralsight.com/courses/building-server-side-rendered-react-apps-beginners', 'Courses', 'JavaScript'),
  createData('Next.js - The Ultimate Way to Build React Apps', 'https://www.educative.io/courses/next-js-build-react-apps', 'Courses', 'JavaScript'),
  createData('This Mission: Next.js from the Ground Up', 'https://explorers.netlify.com/learn/nextjs', 'Courses', 'JavaScript'),
  createData('Learn Next.js 11 - Build Modern Next.js Applications', 'https://codedamn.com/learn/nextjs-fundamentals', 'Courses', 'JavaScript'),
  createData('Build a Fullstack App with Strapi and Next.js', 'https://www.digitalocean.com/community/tech_talks/build-a-fullstack-app-with-strapi-and-next-js', 'Tutorials', 'JavaScript'),
  createData('Next.js Crash Course', 'https://www.youtube.com/watch?v=mTz0GXj8NN0', 'Courses', 'JavaScript'),
  createData('Next.js Tutorial from The Net Ninja', 'https://youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw', 'Tutorials', 'JavaScript'),
  createData('From Design to Development Crash Course - Full Stack Next.js Tutorial', 'https://www.youtube.com/watch?v=QjZIeA952jE&t=402s', 'Tutorials', 'JavaScript'),
  createData('Using Next.js - React Resources', 'https://reactresources.com/topics/nextjs', 'Documentation', 'JavaScript'),
  createData('Next.js Tutorial - Tutorialspoint', 'https://www.tutorialspoint.com/nextjs/index.htm', 'Tutorials', 'JavaScript'),
  createData('Production-Ready Next.js', 'https://frontendmasters.com/workshops/production-next-js/', 'Courses', 'JavaScript'),
  createData('Getting Started with Next.js', 'https://teacode.io/blog/getting-started-next-js', 'Helpful Info', 'JavaScript'),
  createData('Next.js Conference 2020', 'https://www.youtube.com/playlist?list=PLBnKlKpPeagnT2Cmv4giCbosfrbKnuYTD', 'Helpful Info', 'JavaScript'),
  createData('Next.js - Egghead.io', 'https://egghead.io/q/next', 'Tutorials', 'JavaScript'),
  createData('Using Next.js with Wordpress Headless CMS', 'https://academind.com/tutorials/nextjs-wordpress-headless-cms', 'Tutorials', 'JavaScript')
];

const rows9 = [
  createData('Flask Official Documentation', 'https://flask.palletsprojects.com/en/3.0.x/', 'Documentation', 'Python'),
  createData('The Flask Mega-Tutorial', 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world', 'Tutorials', 'Python'),
  createData('Rest APIs with Flask and Python', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Frest-api-flask-and-python%2F', 'Courses', 'Python'),
  createData('Python and Flask Bootcamp: Create Websites using Flask', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-and-flask-bootcamp-create-websites-using-flask%2F', 'Courses', 'Python'),
  createData('Flask: Getting Started', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fflask-getting-started', 'Courses', 'Python'),
  createData('Flask: Develop Web Applications in Python', 'https://www.educative.io/courses/flask-develop-web-applications-in-python?affiliate_id=5073518643380224', 'Courses', 'Python'),
  createData('Python Flask for Beginners: Build a CRUD Web App Using Flask', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-flask-beginners%2F', 'Courses', 'Python'),
  createData('Awesome Flask Resources & Frameworks', 'https://github.com/humiaozuzu/awesome-flask', 'Helpful Info', 'Python'),
  createData('Flask Subreddit Community', 'https://www.reddit.com/r/flask/', 'Community & News', 'Python'),
  createData('Python Subreddit Community', 'https://www.reddit.com/r/Python/', 'Community & News', 'Python'),
  createData('Setting Up a Static Site', 'http://youtu.be/WfpFUmV1d0w', 'Tutorials', 'Python'),
  createData('Creating a Login Page', 'http://youtu.be/bLA6eBGN-_0', 'Tutorials', 'Python'),
  createData('User Authentication', 'http://youtu.be/BnBjhmspw4c', 'Tutorials', 'Python'),
  createData('Template Inheritance', 'http://youtu.be/hNzruwVPtCE', 'Tutorials', 'Python'),
  createData('Databases', 'http://youtu.be/_vrAjAHhUsA', 'Tutorials', 'Python'),
  createData('List Comprehensions', 'http://youtu.be/WqmqNC8Teeo', 'Tutorials', 'Python'),
  createData('Unit Tests', 'http://youtu.be/1aHNs1aEATg', 'Tutorials', 'Python'),
  createData('Deploying to Heroku', 'http://youtu.be/L9uD74nHvFY', 'Tutorials', 'Python'),
  createData('SQLAlchemy', 'https://www.youtube.com/watch?v=kuyrL6krkwA', 'Tutorials', 'Python'),
  createData('Configuration', 'https://www.youtube.com/watch?v=4Eww3wVZK2I', 'Tutorials', 'Python'),
  createData('Secret Key', 'http://youtu.be/tqu9y4iqKVI', 'Tutorials', 'Python'),
  createData('Heroku Configuration Settings', 'http://youtu.be/Y-ONxFkAUJc', 'Tutorials', 'Python'),
  createData('Heroku Postgres Setup', 'https://www.youtube.com/watch?v=FD0p-opdyoE', 'Tutorials', 'Python'),
  createData('Local PostgreSQL Setup', 'https://www.youtube.com/watch?v=Up3p20rgWCw', 'Tutorials', 'Python'),
  createData('Managing Database Migrations', 'http://youtu.be/YJibNSI-iaE', 'Tutorials', 'Python'),
  createData('Database Downgrades with Flask-Migrate/Alembic', 'http://youtu.be/5UT1binVuYc', 'Tutorials', 'Python'),
  createData('Virtualenvwrapper', 'http://youtu.be/thHNYVrY0lU', 'Tutorials', 'Python'),
  createData('Password Hashing', 'http://youtu.be/LTJH5Mdgn4w', 'Tutorials', 'Python'),
  createData('Blueprints', 'http://youtu.be/AeI_rBeZmwg', 'Tutorials', 'Python'),
  createData('Blueprints Redux', 'http://youtu.be/TwNp1UagE9U', 'Tutorials', 'Python'),
  createData('User Authentication (Part 2)', 'http://youtu.be/_pzMDIi5BuI', 'Tutorials', 'Python'),
  createData('Unit Testing with Flask-Testing', 'http://youtu.be/WDh_VQ41kYI', 'Tutorials', 'Python'),
  createData('Session Management with Flask Login', 'http://youtu.be/rJGMOOSnHL0', 'Tutorials', 'Python'),
  createData('Testing User Login and Logout', 'https://www.youtube.com/watch?v=v0fp1O7zCUY', 'Tutorials', 'Python'),
  createData('User Registration (Functionality & Unit Tests)', 'http://youtu.be/kt4PEa5tsVw', 'Tutorials', 'Python'),
  createData('Finalize Messaging System', 'http://youtu.be/WnT188ePHg4', 'Tutorials', 'Python'),
  createData('Test Coverage with coverage.py', 'http://youtu.be/7Aqcn0-uAr0', 'Tutorials', 'Python'),
  createData('Flask Testing', 'http://youtu.be/YO2k80aDJj8', 'Tutorials', 'Python'),
  createData('Flask Testing (Increase Test Coverage)', 'http://youtu.be/ASNNTb6o3pU', 'Tutorials', 'Python'),
  createData('Continuous Integration', 'http://youtu.be/qAe6v_6SMA8', 'Tutorials', 'Python'),
];

const rows10 = [
  createData('Express.js Documentation', 'https://expressjs.com/', 'Documentation', 'JavaScript'),
  createData('Express.js GitHub Repository', 'https://github.com/expressjs/express', 'Documentation', 'JavaScript'),
  createData('Tutorial Series by Code School', 'https://www.youtube.com/watch?v=IjXAr5CJ2Ec', 'Tutorials', 'JavaScript'),
  createData('Tutorial by Derek Banas', 'https://www.youtube.com/watch?v=xDCKcNBFsuI', 'Tutorials', 'JavaScript'),
  createData('Learn to Use the New Router in ExpressJS 4.0', 'https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4', 'Tutorials', 'JavaScript'),
  createData('Simple Server-Side Cache for Express.js with Node.js', 'https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0', 'Helpful Info', 'JavaScript'),
  createData('How to Uncouple Emit Events from Connection Event into Socket.io and Express', 'https://dev.to/wakeupmh/how-to-decouples-emit-events-from-connection-event-into-socket-io-8dk', 'Tutorials', 'JavaScript'),
  createData('LinkedIn Login Using NodeJS, Express, and Passport', 'https://www.loginradius.com/engineering/blog/linkedin-login-using-node-passport/', 'Tutorials', 'JavaScript'),
  createData('Facebook Login Using NodeJS, Express, and Passport', 'https://www.loginradius.com/engineering/blog/facebook-authentication-using-node-and-passport/', 'Tutorials', 'JavaScript'),
  createData('Creating a Google Hangout Bot with Express and Node.js', 'https://www.loginradius.com/engineering/blog/creating-a-google-hangout-bot-with-express-and-node-js/', 'Tutorials', 'JavaScript'),
  createData('OAuth Implementation with Node.js and Github', 'https://www.loginradius.com/engineering/blog/oAuth-implemenation-using-node/', 'Tutorials', 'JavaScript'),
  createData('Express Integration with TW Elements', 'https://tw-elements.com/docs/standard/integrations/express-integration/', 'Tutorials', 'JavaScript'),
  createData('Express.js Fundamentals', 'https://www.udemy.com/expressjs-fundamentals/', 'Courses', 'JavaScript'),
  createData('Projects in ExpressJS - Learn ExpressJS Building 10 Projects', 'https://www.udemy.com/projects-in-expressjs-learn-expressjs-building-10-projects/', 'Courses', 'JavaScript'),
  createData('Building Blocks of Express.js', 'https://www.codeschool.com/courses/building-blocks-of-express-js', 'Courses', 'JavaScript'),
  createData('Express.js Courses at Classpert', 'https://classpert.com/express-js', 'Courses', 'JavaScript'),
  createData('Express.js Course from MDN', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs', 'Courses', 'JavaScript'),
  createData('Just Express (With a Bunch of Node and HTTP)', 'https://www.udemy.com/course/just-express-with-a-bunch-of-node-and-http-in-detail/', 'Courses', 'JavaScript'),
  createData('Learn Express', 'https://www.udemy.com/course/learn-express/', 'Courses', 'JavaScript'),
  createData('Express Application Generator', 'https://expressjs.com/en/starter/generator.html', 'Tools', 'JavaScript'),
  createData('Express MVC Generator', 'https://github.com/rajikaimal/express-mvc', 'Tools', 'JavaScript'),
  createData('Yeoman Express Generator', 'https://github.com/petecoop/generator-express', 'Tools', 'JavaScript'),
  createData('MicroTS Code Generator for Microservices', 'https://www.npmjs.com/package/microts', 'Tools', 'JavaScript'),
  createData('Design-first API Template Engine', 'https://adam-hanna.github.io/design-first-docs/', 'Tools', 'JavaScript'),
  createData('Express Interactive ES6+ Generator', 'https://github.com/eklemen/generate-express', 'Tools', 'JavaScript'),
  createData('Expressa', 'https://github.com/thomas4019/expressa', 'Middleware', 'JavaScript'),
  createData('Morgan', 'https://github.com/expressjs/morgan', 'Middleware', 'JavaScript'),
  createData('Cors', 'https://github.com/expressjs/cors', 'Middleware', 'JavaScript'),
  createData('Body-parser', 'https://github.com/expressjs/body-parser', 'Middleware', 'JavaScript'),
  createData('Multer', 'https://github.com/expressjs/multer', 'Middleware', 'JavaScript'),
  createData('Session', 'https://github.com/expressjs/session', 'Middleware', 'JavaScript'),
  createData('Compression', 'https://github.com/expressjs/compression', 'Middleware', 'JavaScript'),
  createData('Express-youch', 'https://github.com/hmil/express-youch', 'Middleware', 'JavaScript'),
  createData('Errorhandler', 'https://github.com/expressjs/errorhandler', 'Middleware', 'JavaScript'),
  createData('Serve-favicon', 'https://github.com/expressjs/serve-favicon', 'Middleware', 'JavaScript'),
  createData('Csurf', 'https://github.com/expressjs/csurf', 'Middleware', 'JavaScript'),
  createData('Passport', 'http://www.passportjs.org/', 'Middleware', 'JavaScript'),
  createData('Merror', 'https://github.com/mamsoudi/merror', 'Middleware', 'JavaScript'),
  createData('Optic-document-express', 'https://docs.useoptic.com/#/example-fixtures/api-ingestion/node-express', 'Middleware', 'JavaScript'),
  createData('Stats', 'https://github.com/phil-r/stats', 'Middleware', 'JavaScript'),
  createData('Swagger-stats', 'https://github.com/slanatech/swagger-stats', 'Middleware', 'JavaScript'),
  createData('Express-routes-catalogue', 'https://www.npmjs.com/package/express-routes-catalogue', 'Middleware', 'JavaScript'),
  createData('Tweenz', 'https://github.com/sharkcore/tweenz', 'Middleware', 'JavaScript'),
  createData('Express-sharp', 'https://github.com/pmb0/express-sharp', 'Middleware', 'JavaScript'),
  createData('Express-actuator', 'https://github.com/rcruzper/express-actuator', 'Middleware', 'JavaScript'),
  createData('Express-decorator-router', 'https://github.com/LucasMendesl/express-decorator-router', 'Middleware', 'JavaScript'),
  createData('Sonic-express', 'https://github.com/Tiemma/sonic-express', 'Middleware', 'JavaScript'),
  createData('Express-pino-logger', 'https://github.com/pinojs/express-pino-logger', 'Middleware', 'JavaScript'),
  createData('Express-validator', 'https://github.com/express-validator/express-validator', 'Middleware', 'JavaScript'),
  createData('Express-response-hooks', 'https://github.com/arikw/express-response-hooks', 'Middleware', 'JavaScript'),
];

const rows11 = [
  createData('Bootstrap Official Website', 'https://getbootstrap.com/', 'Documentation', 'JavaScript'),
  createData('Bootstrap 4 Quick Start: Code Modern Responsive Websites', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fbootstrap-4%2F', 'Courses', 'JavaScript'),
  createData('Complete Bootstrap 4 Course', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fbootstrap-4-tutorials%2F', 'Courses', 'JavaScript'),
  createData('Learn Bootstrap 4 by Example', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Flearn-bootstrap-4-by-example%2F', 'Courses', 'JavaScript'),
  createData('Understanding Bootstrap Grids and Columns', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Funderstanding-bootstrap-grids-and-columns%2F', 'Courses', 'JavaScript'),
  createData('Introduction to Bootstrap', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fbootstrap-introduction%2F', 'Courses', 'JavaScript'),
  createData('Get Started with Bootstrap - How to Make Websites from Scratch', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fget-started-with-bootstrap-how-to-make-websites-from-scratch%2F', 'Courses', 'JavaScript'),
  createData('Rapid Website Design with Bootstrap', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fresponsive-website-design%2F', 'Courses', 'JavaScript'),
  createData('Bootstrap CSS Framework - Full Course for Beginners', 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjNyp-K1I-CAxUig2oFHSHpBNcQwqsBegQIKRAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-qfEOE4vtxE&usg=AOvVaw1R-KS4d7QMmCboggmIfUH9&opi=89978449', 'Courses', 'JavaScript')
];

const rows12 = [
  createData('Material-UI Official Website', 'https://mui.com/material-ui/getting-started', 'Documentation', 'JavaScript'),
  createData('Material-UI v5 Crash Course', 'https://www.youtube.com/watch?v=o1chMISeTC0', 'Courses', 'JavaScript'),
  createData('React + Material-UI - From Zero to Hero', 'https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ', 'Tutorials', 'JavaScript'),
  createData('Next.js Setup with Material-UI v5', 'https://www.youtube.com/watch?v=IFaFFmPYyMI', 'Tutorials', 'JavaScript'),
  createData('Material-UI v5 Crash Course + Intro to React (2022 Edition)', 'https://www.youtube.com/watch?v=_W3uuxDnySQ', 'Courses', 'JavaScript'),
  createData('Material-UI v5 Tutorial Playlist', 'https://www.youtube.com/playlist?list=PLlR2O33QQkfXnZMMZC0y22gLayBbB1UQd', 'Tutorials', 'JavaScript'),
  createData('The Clever Dev', 'https://www.youtube.com/channel/UCb6AZy0_D1y661PMZck3jOw', 'Helpful Info', 'JavaScript'),
  createData('The Smart Devpreneur', 'https://smartdevpreneur.com/category/javascript/material-ui/', 'Helpful Info', 'JavaScript'),
  createData('Learn Material-UI in One Hour - React Material UI Project Tutorial [2022]', 'https://www.youtube.com/watch?v=Xoz31I1FuiY', 'Tutorials', 'JavaScript'),
  createData('Material UI - React.school', 'https://react.school/material-ui', 'Courses', 'JavaScript'),
  createData('Material UI - The Complete Guide with React (2023 Edition)', 'https://www.udemy.com/course/material-ui/', 'Courses', 'JavaScript'),
  createData('Material UI Tutorial', 'https://www.classcentral.com/course/youtube-material-ui-tutorial-45818', 'Tutorials', 'JavaScript')

];

const rows13 = [
  createData('Tailwind CSS Website', 'https://tailwindcss.com/', 'Documentation', 'HTML/CSS'),
  createData('Tailwind CSS: Beginner to Advanced 2022 (with Project)', 'https://www.tuthub.io/resources/62924e6b8f7bd94d6aa7be73', 'Tutorials', 'HTML/CSS'),
  createData('Tailwind CSS Tutorial', 'https://www.tuthub.io/resources/6284fd10c5e67326b880f1fd', 'Tutorials', 'HTML/CSS'),
  createData('Tailwind CSS React Tutorial', 'https://www.tuthub.io/resources/62933b8a8f7bd94d6aa7c388', 'Tutorials', 'HTML/CSS'),
  createData('Tailwind Crash Course | Project from Scratch', 'https://www.tuthub.io/resources/628906e526eb0bb71ecb59b7', 'Courses', 'HTML/CSS'),
  createData('Net Ninja Tailwind CSS Crash Course', 'https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw', 'Courses', 'HTML/CSS'),
  createData('TailwindInk Color Code Generator', 'https://tailwind.ink/', 'Tools', 'HTML/CSS'),
  createData('Tailblocks UI Blocks', 'https://mertjf.github.io/tailblocks/', 'Tools', 'HTML/CSS'),
  createData('Tailwind Starter Kit', 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation', 'Tools', 'HTML/CSS'),
  createData('Stitches Template Generator', 'https://stitches.hyperyolo.com/', 'Tools', 'HTML/CSS'),
  createData('Tailwind Typography Playground', 'https://tailwind-typography-playground.vercel.app/', 'Tools', 'HTML/CSS'),
  createData('Tailwind Components', 'https://tailwindcomponents.com/', 'Tools', 'HTML/CSS'),
  createData('Tailwind Weekly', 'https://www.getrevue.co/profile/tailwind-weekly', 'Helpful Info', 'HTML/CSS'),
  createData('Tailwind Run', 'https://tailwind.run/new', 'Tools', 'HTML/CSS'),
  createData('Tailwind Gradient Generator', 'https://tailwind-gradient-designer.csspost.com/', 'Tools', 'HTML/CSS'),
  createData('Awesome Tailwind CSS', 'https://github.com/aniftyco/awesome-tailwindcss', 'Tools', 'HTML/CSS')
];

const row14 = [
  createData('SQL Developer Documentation', 'https://docs.oracle.com/cd/E12151_01/index.htm', 'Documentation', 'SQL'),
  createData('Codecademy\'s Free SQL Course', 'https://www.codecademy.com/catalog/language/sql', 'Courses', 'SQL'),
  createData('Intro to SQL: Querying and Managing Data', 'https://www.khanacademy.org/computing/computer-programming/sql', 'Courses', 'SQL'),
  createData('Databases: Relational Databases and SQL', 'https://online.stanford.edu/courses/soe-ydatabases0005-databases-relational-databases-and-sql', 'Courses', 'SQL'),
  createData('SQL and Databases - A Full Course for Beginners', 'https://www.freecodecamp.org/news/sql-and-databases-full-course/', 'Courses', 'SQL'),
  createData('Introduction to SQL', 'https://www.datacamp.com/courses/introduction-to-sql', 'Courses', 'SQL'),
  createData('SQLCourse', 'https://www.sqlcourse.com/', 'Courses', 'SQL'),
  createData('W3Schools SQL Tutorial', 'https://www.w3schools.com/sql/', 'Tutorials', 'SQL'),
  createData('SQLZoo', 'https://sqlzoo.net/', 'Practice', 'SQL'),
  createData('SQLBolt', 'https://sqlbolt.com/', 'Practice', 'SQL'),
  createData('SQL Joins - Venn Diagram', 'https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins', 'Helpful Info', 'SQL'),
  createData('SQL Joins - Checkered Flag Diagram', 'https://github.com/amartinson193/SQL_Checkered_Flag_Join_Diagrams', 'Helpful Info', 'SQL'),
  createData('SQL Order of Execution Cheatsheet', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/SQL%20Order%20of%20Execution%20-%20Data%20Science%20Infinity.pdf', 'Helpful Info', 'SQL'),
  createData('SQL Mind Map - Data Engineering LATAM', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/SQL%20Mind%20Map.jpeg', 'Helpful Info', 'SQL'),
  createData('SQL Commands Cheatsheet', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/SQL%20Commands%20Cheatsheet.jpeg', 'Helpful Info', 'SQL'),
  createData('Data Prep with SQL Quick Reference', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/Data%20Prep%20with%20SQL%20-%20Quick%20Reference.jpeg', 'Helpful Info', 'SQL'),
  createData('The Big 6 of SQL Query Cheatsheet', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/The%20Big%206%20of%20SQL%20Querying%20from%20Maven%20Analytics.pdf', 'Helpful Info', 'SQL'),
  createData('Row Number, Rank, and Dense Rank', 'https://www.linkedin.com/feed/update/urn:li:activity:6975822793540001792', 'Helpful Info', 'SQL'),
  createData('SQL Commands Categories', 'https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/', 'Helpful Info', 'SQL'),
  createData('Common Commands SQL Cheatsheet', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/SQL%20Cheatsheet%20Compilation.jpeg', 'Helpful Info', 'SQL'),
  createData('Database Types', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/Types%20of%20Databases.jpeg', 'Helpful Info', 'SQL'),
  createData('Inner Joins Gone Wrong', 'https://github.com/amartinson193/The-Ultimate-List-of-Free-SQL-Resources/blob/main/CheatSheets/Inner%20Joins%20Gone%20Wrong%20-%20Jeffrey%20Wigington.pdf', 'Helpful Info', 'SQL'),
  createData('SQL Interview Questions & Answers', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/SQL%20Interview%20Questions%20%26%20Answers.pdf', 'Helpful Info', 'SQL'),
  createData('MySQL Interview Questions', 'https://www.stratascratch.com/blog/mysql-interview-questions/', 'Helpful Info', 'SQL'),
  createData('Basic Statistics Using SQL', 'https://github.com/amartinson193/The_Ultimate_List_of_Free_SQL_Resources/blob/main/CheatSheets/Basic%20Statistics%20Using%20SQL.pdf', 'Helpful Info', 'SQL'),
  createData('SQLBattle', 'https://sqlbattle.dev/', 'Practice', 'SQL'),
  createData('Schemaverse', 'https://schemaverse.com/', 'Practice', 'SQL'),
  createData('SQL Murder Mystery', 'https://mystery.knightlab.com/', 'Practice', 'SQL'),
  createData('Codewars', 'https://www.codewars.com/', 'Practice', 'SQL'),
  createData('Ace the SQL Interview', 'https://datalemur.com/', 'Practice', 'SQL'),
  createData('SQL Concepts - Data.World', 'https://docs.data.world/documentation/sql/concepts/basic/SELECT_and_FROM.html', 'Helpful Info', 'SQL')
];

const rows15 = [
  createData('Sequelize Documentation', 'https://sequelize.org/docs', 'Documentation', 'SQL/JavaScript'),
  createData('Introduction to Sequelize ORM for Node.js 6', 'https://www.pluralsight.com/courses/sequelize-orm-nodejs-introduction', 'Courses', 'SQL/JavaScript'),
  createData('Getting Started with Sequelize and Postgres', 'https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp', 'Tutorials', 'SQL/JavaScript'),
  createData('Building a Simple Backend with NodeJS, MySQL, Sequelize, and Express', 'https://medium.com/@clint360.rebase/building-a-simple-backend-with-nodejs-mysql-sequelize-and-express-e08f021537dd', 'Tutorials', 'SQL/JavaScript'),
  createData('Sequelize Relationships - Ultimate Guide', 'https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554', 'Helpful Info', 'SQL/JavaScript'),
  createData('Master the Node.js, Sequelize and TypeScript Stack', 'https://www.youtube.com/watch?v=up6N-NWnSRQ', 'Tutorials', 'SQL/JavaScript'),
  createData('Awesome Sequelize', 'https://sequelize.org/docs/v7/other-topics/resources/', 'Helpful Info', 'SQL/JavaScript'),
  createData('10 Sequelize.js Best Practices - CLIMB', 'https://climbtheladder.com/10-sequelize-js-best-practices/', 'Helpful Info', 'SQL/JavaScript'),
  createData('Understanding Node.js Sequelize ORM Models', 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiwpdbp34-CAxU_rmoFHWbvAcY4FBAWegQICxAB&url=https%3A%2F%2Fwww.section.io%2Fengineering-education%2Funderstanding-nodejs-sequelize-orm-models%2F&usg=AOvVaw0mlHJIQEfYqTohTl8BMhJQ&opi=89978449', 'Helpful Info', 'SQL/JavaScript'),
  createData('An Elegant Guide to Sequelize and Node.js - Fullstack.io', 'https://www.newline.co/@AoX04/an-elegant-guide-to-sequelize-and-nodejs--1378842c', 'Helpful Info', 'SQL/JavaScript')
];

const rows16 = [
  createData('SQLAlchemy Documentation', 'https://www.sqlalchemy.org/', 'Documentation', 'SQL/Python'),
  createData('Optimizing Database Interactions in Python', 'https://soshace.com/optimizing-database-interactions-in-python-sqlalchemy-best-practices/', 'Tutorials', 'SQL/Python'),
  createData('SQLAlchemy Tutorial with Examples', 'https://www.datacamp.com/tutorial/sqlalchemy-tutorial-examples', 'Tutorials', 'SQL/Python'),
  createData('SQLAlchemy ORM Tutorial for Python Developers', 'https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/', 'Tutorials', 'SQL/Python'),
  createData('SQLAlchemy - Python Tutorial', 'https://towardsdatascience.com/sqlalchemy-python-tutorial-79a577141a91', 'Tutorials', 'SQL/Python'),
  createData('SQLAlchemy-Continuum', 'https://sqlalchemy-continuum.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-mptt', 'https://sqlalchemy-mptt.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLALchemy-ORM-tree', 'https://sqlalchemy-orm-tree.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Vdm', 'https://github.com/okfn/vdm', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-Enum34', 'https://github.com/spoqa/sqlalchemy-enum34', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-utc', 'https://github.com/spoqa/sqlalchemy-utc', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-utils', 'https://sqlalchemy-utils.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Alembic', 'https://alembic.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-migrate', 'https://sqlalchemy-migrate.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Filedepot', 'https://depot.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-ImageAttach', 'https://sqlalchemy-imageattach.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-media', 'https://github.com/pylover/sqlalchemy-media', 'Packages & Utilities', 'SQL/Python'),
  createData('ColanderAlchemy', 'https://github.com/stefanofontanelli/ColanderAlchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('Flask-Validator', 'https://flask-validator.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('FormAlchemy', 'https://github.com/FormAlchemy/formalchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('WTForms-Alchemy', 'https://wtforms-alchemy.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Sprox', 'https://sprox.org/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-Searchable', 'https://sqlalchemy-searchable.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-FullText-Search', 'https://github.com/mengzhuo/sqlalchemy-fulltext-search', 'Packages & Utilities', 'SQL/Python'),
  createData('GeoAlchemy', 'https://geoalchemy.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('GeoAlchemy 2', 'https://geoalchemy-2.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Sqlakeyset', 'https://github.com/djrobstep/sqlakeyset', 'Packages & Utilities', 'SQL/Python'),
  createData('Marshmallow-SQLAlchemy', 'https://marshmallow-sqlalchemy.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Pydantic', 'https://github.com/samuelcolvin/pydantic', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLAlchemy-dict', 'https://github.com/meyt/sqlalchemy-dict', 'Packages & Utilities', 'SQL/Python'),
  createData('Charlatan', 'https://github.com/uber/charlatan', 'Packages & Utilities', 'SQL/Python'),
  createData('Factory-boy', 'https://github.com/FactoryBoy/factory_boy', 'Packages & Utilities', 'SQL/Python'),
  createData('Mixer', 'https://github.com/klen/mixer', 'Packages & Utilities', 'SQL/Python'),
  createData('Dataset', 'https://dataset.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Rdflib-sqlalchemy', 'https://github.com/RDFLib/rdflib-sqlalchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('PugSQL', 'https://pugsql.org/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLSoup', 'https://sqlsoup.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLModel', 'https://sqlmodel.tiangolo.com/', 'Packages & Utilities', 'SQL/Python'),
  createData('Zillion', 'https://totalhack.github.io/zillion/', 'Packages & Utilities', 'SQL/Python'),
  createData('Flask-SQLAlchemy-PGEvents', 'https://github.com/shawalli/flask-sqlalchemy-pgevents', 'Packages & Utilities', 'SQL/Python'),
  createData('Sqlalchemy-crosstab-postgresql', 'https://github.com/makmanalp/sqlalchemy-crosstab-postgresql', 'Packages & Utilities', 'SQL/Python'),
  createData('Sqlalchemy-postgres-copy', 'https://github.com/jmcarp/sqlalchemy-postgres-copy', 'Packages & Utilities', 'SQL/Python'),
  createData('Sadisplay', 'https://bitbucket.org/estin/sadisplay', 'Packages & Utilities', 'SQL/Python'),
  createData('Sqlalchemy_schemadisplay', 'https://github.com/fschulze/sqlalchemy_schemadisplay', 'Packages & Utilities', 'SQL/Python'),
  createData('Eralchemy', 'https://github.com/Alexis-benoist/eralchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('Bottle-sqlalchemy', 'https://github.com/iurisilvio/bottle-sqlalchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('Filteralchemy', 'https://github.com/jmcarp/filteralchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('Flask-SQLAlchemy', 'https://pythonhosted.org/Flask-SQLAlchemy/', 'Packages & Utilities', 'SQL/Python'),
  createData('Flask-Admin', 'https://github.com/flask-admin/flask-admin', 'Packages & Utilities', 'SQL/Python'),
  createData('Pyramid-sqlalchemy', 'https://pyramid-sqlalchemy.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('Pyramid-restler', 'https://github.com/wylee/pyramid_restler', 'Packages & Utilities', 'SQL/Python'),
  createData('Sacrud', 'https://sacrud.readthedocs.io/', 'Packages & Utilities', 'SQL/Python'),
  createData('SQLA-wrapper', 'https://github.com/jpscaletti/sqla-wrapper', 'Packages & Utilities', 'SQL/Python'),
  createData('Zope.sqlalchemy', 'https://pypi.org/project/zope.sqlalchemy/', 'Packages & Utilities', 'SQL/Python'),
  createData('Paginate_sqlalchemy', 'https://github.com/Pylons/paginate_sqlalchemy', 'Packages & Utilities', 'SQL/Python'),
  createData('Sandman2', 'https://github.com/jeffknupp/sandman2', 'Packages & Utilities', 'SQL/Python'),
  createData('Sqlalchemy-mixins', 'https://github.com/absent1706/sqlalchemy-mixins', 'Packages & Utilities', 'SQL/Python')
];

const rows17 = [
  createData('PostgreSQL Documentation', 'https://www.postgresql.org/docs/', 'Documentation', 'SQL'),
  createData('DBeaver - Free Universal Database Tool', 'https://dbeaver.io/download/', 'Tools', 'SQL'),
  createData('PostgreSQL 101', 'https://www.red-gate.com/hub/events/series/postgresql-101?utm_source=google&utm_medium=cpc&utm_campaign=postgresql&utm_term=learn-postgresql&utm_content=P-GS-PostgreSQL-Informational&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NOvjoe7OKvClMtZxB1zK5z4Be-aubhjKyd3gG-3-22bSoEA3ecyVXBoCXPMQAvD_BwE', 'Courses', 'SQL'),
  createData('PostgreSQL Tutorial', 'https://www.postgresqltutorial.com/', 'Tutorials', 'SQL'),
  createData('Tutorials Point PostgreSQL', 'https://www.tutorialspoint.com/postgresql/', 'Tutorials', 'SQL'),
  createData('PG Exercises', 'https://pgexercises.com/', 'Practices', 'SQL'),
  createData('PostgreSQL Primer for Busy Poeple', 'https://zaiste.net/posts/postgresql-primer-for-busy-people/', 'Helpful Info', 'SQL'),
  createData('Schemaverse', 'https://schemaverse.com/', 'Practices', 'SQL'),
  createData('Awesome Postgres', 'https://github.com/dhamaniasad/awesome-postgres', 'Helpful Info', 'SQL'),
  createData('The Complete Python and PostgreSQL Developer Course', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-python-postgresql-developer-course%2F', 'Courses', 'SQL'),
  createData('SQL and PostgreSQL for Beginners', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsql-and-postgresql-for-beginners%2F', 'Courses', 'SQL'),
  createData('PostgreSQL: Getting Started', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fpostgresql-getting-started', 'Courses', 'SQL'),
  createData('Intro to PostgreSQL Databases with PgAdmin for Beginners', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fintro-to-postgresql-databases-with-pgadmin%2F', 'Courses', 'SQL'),
  createData('Free PostgreSQL Course from FreeCodeCamp', 'https://www.youtube.com/watch?v=qw--VYLpxG4', 'Courses', 'SQL'),
  createData('SQL Crash Course: PostgreSQL for Beginners', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsql-crash-course-postgresql-for-beginners%2F', 'Courses', 'SQL'),
  createData('PostgreSQL: Advanced SQL Queries', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fpostgresql-advanced-sql-queries', 'Courses', 'SQL')
];

const rows18 = [
  createData('MongoDB Documentation', 'https://www.mongodb.com/docs/', 'Documentation', 'NoSQL'),
  createData('The Complete Developers Guide to MongoDB', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fthe-complete-developers-guide-to-mongodb%2F', 'Courses', 'NoSQL'),
  createData('Introduction to MongoDB', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fmongodb-introduction', 'Courses', 'NoSQL'),
  createData('MongoDB Essentials - Complete MongoDB Guide', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fmongodb-essentials-m%2F', 'Courses', 'NoSQL'),
  createData('MongoDB Administration', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fmongodb-administration', 'Courses', 'NoSQL'),
  createData('MongoDB 101 & MongoDB 201', 'https://studio3t.com/academy/', 'Courses', 'NoSQL'),
  createData('Learn MongoDB: Leading NoSQL Database from Scratch', 'https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=634352.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Flearn-mongodb-leading-nosql-database-from-scratch%2F', 'Courses', 'NoSQL')
];

// const rows19 = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const rows20 = [
  createData('Docker Documentations', 'https://docs.docker.com/', 'Documentation', "All"),
  createData('Docker and Kubernetes: The Complete Guide', 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Docker_v.PROF_la.EN_cc.US_ti.5470&utm_content=deal4584&utm_term=_._ag_82041664964_._ad_622358215405_._kw__._de_c_._dm__._pl__._ti_aud-1888734399789%3Adsa-774930034249_._li_9027373_._pd__._&matchtype=&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NGFY-zjF11NZSjGvGnCfNMvIt8ltibBCd-14EpIe2Mn3yt8NkuqbLxoCLg4QAvD_BwE', 'Courses', "All"),
  createData('Introduction to Containers w/ Docker, Kubernetes & OpenShift', 'https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift?specialization=ibm-backend-development&utm_medium=sem&utm_source=gg&utm_campaign=B2C_NAMER_ibm-backend-development_ibm_FTCOF_professional-certificates_country-US-country-CA&campaignid=19973760166&adgroupid=146696810063&device=c&keyword=&matchtype=&network=g&devicemodel=&adposition=&creativeid=654910474289&hide_mobile_promo&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NHNLhGDiqWzXY0JqWUC-jQqyWDZXfOdtyyR2Aw_1SEZVxMCx_TehrxoC1TwQAvD_BwE', 'Courses', "All"),
  createData('Learn Docker by Doing', 'https://www.pluralsight.com/cloud-guru/courses/learn-docker-by-doing?utm_source=google&utm_medium=paid-search&utm_campaign=cloud-transformation&utm_term=ssi-global-acg-core-dsa&utm_content=free-trial&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NJ19T16zpB_p1RQtgHEjJdIPEqBkKVvlGEi6al_QeFE7mr7HK-kgCBoCnGkQAvD_BwE', 'Courses', "All"),
  createData('Docker for Developers', 'https://www.educative.io/courses/docker-for-developers?utm_campaign=brand_educative&utm_source=google&utm_medium=ppc&utm_content=performance_max&eid=5082902844932096&utm_term=&utm_campaign=%5BNew%5D+Performance+Max&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=18511913007&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NNX5ACX90xOfPOK5zKZhAUxD3qUsLK7mNsFtdEQu8vtSU0agaDCc8xoCKokQAvD_BwE', 'Courses', "All"),
  createData('Docker Mastery, Docker Swarm Mastery, Docker Mastery for Node.js Projects', 'https://www.bretfisher.com/courses/', 'Courses', "All"),
  createData('Docker for .NET Apps - On Linux and Windows', 'https://docker4.net/udemy', 'Courses', "All"),
  createData('Dive Into Docker, Docker for DevOps', 'https://nickjanetakis.com/courses/', 'Courses', "All"),
  createData('Docker for Java Developers', 'https://www.lynda.com/Docker-tutorials/Docker-Java-developers/576584-2.html', 'Courses', "All"),
  createData('Docker in Depth', 'https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/?utm_feeditemid=&utm_device=c&utm_term=&utm_campaign=%5BSearch%5D+DSA+-+All+Website+-+USA&utm_source=google&utm_medium=ppc&hsa_acc=5890858304&hsa_cam=12050150150&hsa_grp=115060577886&hsa_ad=651406236896&hsa_src=g&hsa_tgt=dsa-19959388920&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NOjyrRmHJQmWIfo3OPhK9zS-3EPAl6K5fWqs316Jt0cgY7VU8qn75RoCDbMQAvD_BwE', 'Courses', "All"),
  createData('Docker and Kubernetes Labs', 'https://collabnix.com/', 'Courses', "All"),
  createData('Docker for the Absolute Beginner - Hands-On - DevOps', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Flearn-docker%2F&u1=JAVAREVISITED', 'Courses', "All"),
  createData('Docker - Introducing Docker Essentials, Containers, and More', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdocker-containers%2F&u1=JAVAREVISITED', 'Courses', "All"),
  createData('Introduction to Docker: Build Your Own Portfolio Site', 'https://coursera.pxf.io/c/3294490/1164545/14726?u=https%3A%2F%2Fwww.coursera.org%2Fprojects%2Fintroduction-to-docker-build-portfolio-site', 'Courses', "All"),
  createData('Play-By-Play: Docker for Java Developers', 'https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fplay-by-play-docker-java-developers-arun-gupta-michael-hoffman', 'Courses', "All"),
  createData('The Complete Guide to Running Java in Docker and Kubernetes', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-guide-to-running-java-in-docker-and-kubernetes%2F&u1=JAVAREVISITED', 'Courses', "All"),
  createData('What is a Container?', 'https://www.docker.com/resources/what-container/', 'Helpful Info', "All"),
  createData('A Docker Tutorial for Beginners', 'https://docker-curriculum.com/', 'Tutorials', "All"),
  createData('Docker Essential Training: Installation and Configuration', 'https://linkedin-learning.pxf.io/LPo00L?subId3=blog%2Fbest-docker-cours_amcid-PYxIYAi2sigeei6iIIZl2', 'Courses', "All"),
  createData('Learning Docker', 'https://linkedin-learning.pxf.io/QOzYYM?subId3=blog%2Fbest-docker-cours_amcid-3UzlFFVO3QJIxQbYYpgpU', 'Courses', "All"),
  createData('The Docker for DevOps Course: From Development to Production', 'https://click.linksynerghttps//click.linksynergy.com/deeplink?id=SeYHzlfZEmI&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevops-docker-complete-guide-hands-on-with-practical%2F', 'Courses', 'All')
];

const rows21 = [
  createData('Kubernetes Documentation', 'https://kubernetes.io/docs/home/', 'Documentation', "All"),
  createData('Docker and Kubernetes: The Complete Guide', 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Docker_v.PROF_la.EN_cc.US_ti.5470&utm_content=deal4584&utm_term=_._ag_82041664964_._ad_622358215405_._kw__._de_c_._dm__._pl__._ti_aud-1888734399789%3Adsa-774930034249_._li_9027373_._pd__._&matchtype=&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NGFY-zjF11NZSjGvGnCfNMvIt8ltibBCd-14EpIe2Mn3yt8NkuqbLxoCLg4QAvD_BwE', 'Courses', "All"),
  createData('Introduction to Containers w/ Docker, Kubernetes & OpenShift', 'https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift?specialization=ibm-backend-development&utm_medium=sem&utm_source=gg&utm_campaign=B2C_NAMER_ibm-backend-development_ibm_FTCOF_professional-certificates_country-US-country-CA&campaignid=19973760166&adgroupid=146696810063&device=c&keyword=&matchtype=&network=g&devicemodel=&adposition=&creativeid=654910474289&hide_mobile_promo&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NHNLhGDiqWzXY0JqWUC-jQqyWDZXfOdtyyR2Aw_1SEZVxMCx_TehrxoC1TwQAvD_BwE', 'Courses', "All"),
  createData('Docker and Kubernetes Labs', 'https://collabnix.com/', 'Courses', "All"),
  createData('Kubernetes 101', 'https://nigelpoulton.com/video-courses', 'Courses', "All"),
  createData('The Complete Guide to Running Java in Docker and Kubernetes', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-guide-to-running-java-in-docker-and-kubernetes%2F&u1=JAVAREVISITED', 'Courses', "All"),
  createData('Kubernetes: A Deep Dive', 'https://www.educative.io/courses/the-kubernetes-course?utm_campaign=brand_educative&utm_source=google&utm_medium=ppc&utm_content=performance_max&eid=5082902844932096&utm_term=&utm_campaign=%5BNew%5D+Performance+Max&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=18511913007&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NP1hGeh8bptaRbeiXyve8whabKKhE-y2l47C0taq3acyE-rvL7D7zxoCuiIQAvD_BwE', 'Courses', "All"),
  createData('The Complete Kubernetes Course', 'https://www.udemy.com/topic/Kubernetes/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Kubernetes_v.NONP_la.EN_cc.US_ti.6472&utm_content=deal4584&utm_term=_._ag_82018078242_._ad_573563325736_._kw_kubernetes%20devops_._de_c_._dm__._pl__._ti_aud-1888734399789:kwd-457994573704_._li_9027373_._pd__._&matchtype=b&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NAI0Ys7rUdxZzX51-NxgI8GRBfQpnx8t7JQcNztrEqAXI82G1BfetRoC_dcQAvD_BwE', 'Courses', "All"),
  createData('What is a Container?', 'https://www.docker.com/resources/what-container/', 'Helpful Info', "All"),
  createData('Why (and When) You Should Use Kubernetes', 'https://hackernoon.com/why-and-when-you-should-use-kubernetes-8b50915d97d8', 'Helpful Info', "All"),
  createData('Understanding the Kubernetes YAML Syntax', 'https://betterprogramming.pub/understanding-kubernetes-yaml-syntax-83359d33f9c2', 'Helpful Info', "All"),
  createData('Kubernetes Tutorial - Step by Step Introduction to Basic Concepts', 'https://auth0.com/blog/kubernetes-tutorial-step-by-step-introduction-to-basic-concepts/', 'Helpful Info', "All"),
  createData('Deploying a Kubernetes Cluster with Amazon EKS', 'https://logz.io/blog/amazon-eks-cluster/', 'Tutorials', "All"),
  createData('Kubernetes as a Service: GKE vs. AKS vs. EKS', 'https://logz.io/blog/kubernetes-as-a-service-gke-aks-eks/', 'Helpful Info', "All"),
  createData('Quickstart - Create an Azure Kubernetes Service (AKS) Using the Azure Portal', 'https://docs.microsoft.com/bs-latn-ba/azure/aks/kubernetes-walkthrough-portal', 'Tutorial', "All"),
  createData('Google Kubernetes Engine: Explain Like I\'m Five!', 'https://medium.com/faun/google-kubernetes-engine-explain-like-im-five-1890e550c099', 'Helpful Info', "All"),
  createData('Comparing Kubernetes Networking Providers: Flannel, Calico, Canal, and Weave', 'https://rancher.com/blog/2019/2019-03-21-comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/', 'Helpful Info', "All"),
  createData('Kubernetes 101: Pods, Nodes, Containers, and Clusters', 'https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16', 'Helpful Info', "All"),
  createData('Kubernetes Deployment Tutorial with YAML', 'https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-deployment-tutorial-example-yaml.html', 'Tutorials', "All"),
  createData('What Is a Service Mesh, and Why Do You Need One?', 'https://logz.io/blog/what-is-a-service-mesh-kubernetes-istio/', 'Helpful Info', "All"),
  createData('Kubernetes - Autoscaling', 'https://www.tutorialspoint.com/kubernetes/kubernetes_autoscaling.htm', 'Tutorials', "All"),
  createData('Kubernetes Helm 101', 'https://medium.com/dwarves-foundation/kubernetes-helm-101-78f70eeb0d1', 'Helpful Info', "All"),
  createData('Deploy Your First Scalable PHP/MySQL Web Application in Kubernetes', 'https://medium.com/faun/deploy-your-first-scaleable-php-mysql-web-application-in-kubernetes-33ed7ab66595', 'Tutorial', "All"),
  createData('A Practical Guide to Kubernetes Logging', 'https://logz.io/blog/a-practical-guide-to-kubernetes-logging/', 'Helpful Info', "All")
];

// Machine Learning - Services & Tools
const rows22 = [
  createData3('Gradio', 'https://www.gradio.app/', 'Packages & Utilities'),
  createData3('Vertex AI', 'https://cloud.google.com/vertex-ai?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-e-dr-1605212&utm_content=text-ad-none-any-DEV_c-CRE_665735422037-ADGP_Hybrid+%7C+BKWS+-+MIX+%7C+Txt_AI+and+ML+General-KWID_43700077225650913-aud-1461360047640:kwd-553582750299&utm_term=KW_vertex+ai-ST_vertex+ai&gclid=CjwKCAjwvrOpBhBdEiwAR58-3PCUcW_oFAegwdr6Kjp-WTU8qXiATyfG_0PR_VfmDIEG6KqtVhJwIRoCpskQAvD_BwE&gclsrc=aw.ds&hl=en', 'Tools'),
  createData3('Google Colab', 'https://colab.research.google.com/?authuser=2#scrollTo=OwuxHmxllTwN', 'Tools'),
  createData3('OpenAI API', 'https://openai.com/blog/openai-api', 'Tools'),
  createData3('OpenAI Model', 'https://platform.openai.com/docs/models', 'Models'),
  createData3('PaLM 2', 'https://ai.google/discover/palm2/', 'Models'),
  createData3('Hugging Face', 'https://huggingface.co/models', 'Models'),
  createData3('Kaggle', 'https://www.kaggle.com/models', 'Models'),
  createData3('Cohere', 'https://docs.cohere.com/docs', 'Models'),
  createData3('Hugging Face Datasets', 'https://huggingface.co/docs/datasets/index', 'Datasets'),
  createData3('Kaggle Datasets', 'https://www.kaggle.com/datasets', 'Datasets'),
  createData3('Awesome Data', 'https://github.com/awesomedata/awesome-public-datasets', 'Datasets'),
  createData3('Google Dataset Search Tool', 'https://datasetsearch.research.google.com/', 'Tools'),
  createData3('Reddit Dataset', 'https://www.reddit.com/r/datasets/', 'Datasets'),
  createData3('Whisper API', 'https://whisperapi.com/', 'Tools'),
  createData3('Google API', 'https://cloud.google.com/products/ai', 'Tools'),
  createData3('Amazon Web Services (AWS)', 'https://aws.amazon.com/machine-learning/', 'Tools'),
  createData3('BotPress', 'https://botpress.com/', 'Tools'),
  createData3('PyTorch', 'https://pytorch.org/', 'Packages & Utilites'),
  createData3('TensorFlow', 'https://www.tensorflow.org/', 'Packages & Utilities')
];

// Machine Learning - Courses
const rows23 = [
  createData3('Building Systems with the ChatGPT API', 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', 'Courses'),
  createData3('Prompt Engineering 101', 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', 'Courses'),
  createData3('How Diffusion Models Work', 'https://www.deeplearning.ai/short-courses/how-diffusion-models-work/', 'Courses'),
  createData3('LangChain for LLM Application Development', 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/', 'Courses'),
  createData3('Intro to Generative AI', 'https://www.cloudskillsboost.google/course_templates/536', 'Courses'),
  createData3('Intro to Large Language Models', 'https://www.cloudskillsboost.google/course_templates/539', 'Courses'),
  createData3('Intro to Responsible AI', 'https://www.cloudskillsboost.google/course_templates/554', 'Courses'),
  createData3('Intro to Image Generation', 'https://www.cloudskillsboost.google/course_templates/541', 'Courses'),
  createData3('Encoder-Decoder', 'https://www.cloudskillsboost.google/course_templates/543', 'Courses'),
  createData3('Attention Mechanism', 'https://www.cloudskillsboost.google/course_templates/537', 'Courses'),
  createData3('Transformers & BERT Models', 'https://www.cloudskillsboost.google/course_templates/538', 'Courses'),
  createData3('Create Image Captioning Models', 'https://www.cloudskillsboost.google/course_templates/542', 'Courses'),
  createData3('Intro to Gen AI Studio', 'https://www.cloudskillsboost.google/course_templates/552', 'Courses')
];

// Machine Learning - Tutorials
const row24 = [
  createData3('How to Build a ChatGPT-Powered Recipe Chatbot with BotPress', 'https://www.youtube.com/watch?v=yu1Sg_M_Ltc', 'Tutorials'),
  createData3('Capturing User Information', 'https://www.youtube.com/watch?v=yu1Sg_M_Ltc', 'Tutorials'),
  createData3('GeeksforGeeks Machine Learning Tutorial', 'https://www.geeksforgeeks.org/machine-learning/', 'Tutorials'),
  createData3('Machine Learning Tutorial: A Step-by-Step Guide for Beginners', 'https://www.simplilearn.com/tutorials/machine-learning-tutorial', 'Tutorials'),
  createData3('Python Machine Learning', 'https://www.w3schools.com/python/python_ml_getting_started.asp', 'Tutorials'),
  createData3('Machine Learning Tutorial for Beginners', 'https://www.mygreatlearning.com/blog/machine-learning-tutorial/', 'Tutorials'),
  createData3('Machine Learning Tutorial - TutorialsPoint', 'https://www.tutorialspoint.com/machine_learning/index.htm', 'Tutorials'),
  createData3('A Machine Learning Tutorial with Examples: An Introduction to ML Theory and Its Applications', 'https://www.toptal.com/machine-learning/machine-learning-theory-an-introductory-primer', 'Tutorials')
];

// Machine Learning - Documentation
// const rows25 = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// Front End - Services & Tools
const rows26 = [
  createData('Flexbox Froggy', 'https://flexboxfroggy.com/', 'Practices', 'CSS'),
  createData('Flexbox Defense', 'https://www.flexboxdefense.com/', 'Practices', 'CSS'),
  createData('Grid Garden', 'https://cssgridgarden.com/', 'Practices', 'CSS'),
  createData('Codepen.io', 'https://codepen.io/pen/tour/welcome/start', 'Tools', 'CSS'),
  createData('Replit', 'https://repl.it/', 'Tools', 'All'),
  createData('CanIUse', 'https://caniuse.com/', 'Tools', 'All'),
  createData('30 Seconds of Code', 'https://30secondsofcode.org/', 'Tools', 'All'),
  createData('Roadmap.sh', 'https://roadmap.sh/', 'Tools', 'All'),
];

// Front End - Courses
const rows27 = [
  createData4('FreeCodeCamp', 'https://freecodecamp.org/', 'All'),
  createData4('The Complete Front-End Web Development Course', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Ffront-end-web-development%2F', 'HTML, CSS, JavaScript'),
  createData4('Programming Foundations with JavaScript', 'https://coursera.pxf.io/c/3294490/1164545/14726?u=https%3A%2F%2Fwww.coursera.org%2Flearn%2Fduke-programming-web', 'HTML, CSS, JavaScript'),
  createData4('The Web Developer Bootcamp 2023', 'https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fthe-web-developer-bootcamp%2F', 'HTML, CSS, JavaScript'),
  createData4('Front End Web Development: Get Started', 'http://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Ffront-end-web-app-html5-javascript-css', 'HTML, CSS, JavaScript'),
  createData4('Front End Web Development with React', 'https://coursera.pxf.io/c/3294490/1164545/14726?u=https%3A%2F%2Fwww.coursera.org%2Flearn%2Ffront-end-react', 'HTML, CSS, JavaScript'),
  createData4('Become a Front-End Developer', 'https://www.educative.io/track/beginning-front-end-developer?affiliate_id=5073518643380224', 'HTML, CSS, JavaScript'),
  createData4('Meta Front-End Developer', 'https://www.coursera.org/professional-certificates/meta-front-end-developer', 'HTML, CSS, JavaScript')
];

// Front End - Tutorials
const rows28 = [
  createData4('JavaScript.info', 'https://javascript.info/', 'JavaScript'),
  createData4('CSS Tricks', 'https://css-tricks.com/', 'HTML, CSS, JavaScript'),
  createData4('JavaScript30', 'https://javascript30.com/', 'JavaScript'),
  createData4('CareerFoundry', 'https://careerfoundry.com/en/tutorials/web-development-for-beginners/', 'HTML, CSS, JavaScript'),
  createData4('Frontend Web Development: In-Depth Project Tutorial', 'https://www.freecodecamp.org/news/frontend-web-development-in-depth-project-tutorial/', 'HTML, CSS, JavaScript')
];

// Front End - Documentation
const rows29 = [
  createData4('Mozilla Developer Network Documentation', 'https://developer.mozilla.org/', 'HTML, CSS, JavaScript'),
  createData4('HTML Reference Documentation', 'https://htmlreference.io/', 'HTML'),
  createData4('CSS Reference Documentation', 'https://cssreference.io/', 'CSS'),
  createData4('Goalkicker', 'https://goalkicker.com/', 'All'),
  createData4('W3resource', 'https://w3resource.com/', 'All'),
  createData4('React Documentation', 'https://react.dev/', 'JavaScript'),
  createData4('Angular Documentation', 'https://angular.io/docs', 'TypeScript, JavaScript'),
  createData4('Next.js Documentation', 'https://nextjs.org/docs', 'JavaScript')
];

// Back End - Services & Tools
const rows30 = [
  createData('Awesome Nodejs', 'https://github.com/sindresorhus/awesome-nodejs', 'Packages & Utilities', 'JavaScript'),
  createData('Attacks', 'https://owasp.org/www-community/attacks/', 'Tools', 'All'),
  createData('Exhaustive Comparison of Database Types', 'https://www.cockroachlabs.com/docs/stable/cockroachdb-in-comparison.html', 'Tools', 'All'),
  createData('Optimizing MySQL Performance', 'https://www.oreilly.com/library/view/high-performance-mysql/9781449332471/ch01.html', 'Tools', 'SQL'),
  createData('Deconstructing Graph Based DBs', 'https://neo4j.com/blog/graph-databases-for-beginners-wait-what-do-you-mean-by-graph/', 'Tools', 'All'),
  createData('Public APIs', 'https://public-apis.io/', 'Tools', 'All'),
  createData('JSONPlaceholder', 'https://jsonplaceholder.typicode.com/', 'Tools', 'All'),
  createData('Rest Cookbook', 'https://restcookbook.com/', 'Tools', 'All'),
  createData('Zero to Hero Guide for Microservices', 'https://martinfowler.com/microservices/', 'Tools', 'All'),
  createData('Firebase', 'https://firebase.google.com/?gad=1&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mhJbeETDr_fNIIDYBGhSJpSh1LzUl-DtR7GmmfTb3yv8B5evCqdIWRoCMqYQAvD_BwE&gclsrc=aw.ds', 'Tools', 'All'),
  createData('Back4App', 'https://www.back4app.com/', 'Services', 'All'),
  createData('Heroku', 'https://www.heroku.com/', 'Services', 'All'),
  createData('PostmanAPI', 'https://www.postman.com/', 'Services', 'All'),
  createData('Podcast - The Backend Engineering Show', '', 'Tools', 'All'),
];

// Back End - Courses
const rows31 = [
  createData4('AWS Training', 'https://www.aws.training/Dashboard/', 'All'),
  createData4('Back-End Application Development with JavaScript', 'https://www.shiksha.com/online-courses/back-end-application-development-with-javascript-course-unofmil7', 'JavaScript'),
  createData4('Using Python to Interact with the Operating System', 'https://www.shiksha.com/online-courses/using-python-to-interact-with-the-operating-system-course-courl2225', 'Python'),
  createData4('Communication Design Patterns for Backend Development', 'https://www.freecodecamp.org/news/communication-design-patterns-for-backend-development/', 'All'),
  createData4('How to Handle File Uploads on the Back End in Node.js and Nuxt', 'https://www.freecodecamp.org/news/handle-file-uploads-on-the-backend-in-node-js-nuxt/', 'All'),
  createData4('Backend Web Development with Python - Full Course', 'https://www.freecodecamp.org/news/backend-web-development-with-python-full-course/', 'Python'),
  createData4('Learn Node.js and Express - Free 8-hour Back End Development Course', 'https://www.freecodecamp.org/news/free-8-hour-node-express-course/', 'JavaScript'),
  createData4('Decentralized Applications Architecture: Back End, Security and Design Patterns', 'https://www.freecodecamp.org/news/how-to-design-a-secure-backend-for-your-decentralized-application-9541b5d8bddb/', 'All')
];

// Back End - Tutorials
const rows32 = [
  createData4('Create a React App with a .NET Core Backend', 'https://www.freecodecamp.org/news/create-a-react-app-with-a-dot-net-backend/', 'All'),
  createData4('How to Build and Deploy a Backend App with Express, Postgres, GitHub, and Heroku', 'https://www.freecodecamp.org/news/how-to-build-a-backend-application/', 'All'),
  createData4('How to Build a Complete Back End System with Serverless', 'https://www.freecodecamp.org/news/complete-back-end-system-with-serverless/', 'All'),
  createData4('How to Create the Backend of a Crypto Tracking App Using Swift and Laravel', 'https://www.freecodecamp.org/news/how-to-create-the-backend-of-a-crypto-tracking-app-using-swift-and-laravel-1d9122bc290b/', 'All'),
  createData4('How to Add a Powerful Search Engine to Your Rails Backend', 'https://www.freecodecamp.org/news/how-to-add-a-powerful-search-engine-to-your-rails-backend-57bced889032/', 'Ruby')
];

// Back End - Documentation
const rows33 = [
  createData4('Node Best Practices', 'https://github.com/goldbergyoni/nodebestpractices', 'JavaScript'),
  createData4('Flask Documentation', 'https://flask.palletsprojects.com/en/3.0.x/', 'Python'),
  createData4('Express.js Documentation', 'https://expressjs.com/', 'JavaScript'),
  createData4('Ruby on Rails Documentation', 'https://api.rubyonrails.org/', 'Ruby'),
  createData4('Django Documentation', 'https://docs.djangoproject.com/en/4.2/', 'Python'),
  createData4('Laravel Documentation', 'https://laravel.com/docs/10.x/readme', 'PHP'),
  createData4('CakePHP Documentation', 'https://book.cakephp.org/4/en/index.html', 'PHP'),
  createData4('Spring Framework Documentation', 'https://docs.spring.io/spring-framework/reference/index.html', 'Java'),
  createData4('ASP.NET Documentation', 'https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0', 'C#')
];

const row34 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows35 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows36 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows37 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows38 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows39 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows40 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows41 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows42 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows43 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const row44 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows45 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows46 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows47 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows48 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows49 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows50 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows51 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows52 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows53 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const row54 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows55 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows56 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows57 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows58 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows59 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows60 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows61 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows62 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows63 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const row64 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const ResourcesComponent = () => {
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        // <>
      <Box sx={{ display: 'flex', height: "100vh" }}>
        <Box sx={{ display: 'flex', height: "100vh" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
                backgroundColor: "black"
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <img src="https://i.ibb.co/dLgCNcW/projectblockr-shieldonly.png" style={{"height": "50px", "marginRight": "10px"}} alt="projectblockr-shieldonly" />
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Resources
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <PersonIcon onClick={() => history.push('/user')} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
            </List>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            marginTop: "70px"
          }}
        >
        <div id='resource-page-wrapper'>
          <div style={{"display": "flex", "justifyContent": "center"}}>
            <h1>Resources</h1>
          </div>
          <div className='resource-main-content'>
            <div>
              <h2 style={{ "borderBottom": "1px solid gray", "paddingBottom": "10px" }}>Topics</h2>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>General</h4>
              {/* Technical Interviews */}
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Data Structures & Algorithms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows1.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Coding Challenges */}
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Coding Problems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Challenge Name</TableCell>
            <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
            <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
            <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
            <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.resourceName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.challengeName}</TableCell>
              <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Challenge Link</a></TableCell>
              <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
              <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
              <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Developer Communities */}
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Developer Communities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows3.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* News */}
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>News</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows4.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Libraries & Frameworks</h4>
              {/* Angular */}
              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Angular</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows5.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* React */}
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows6.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Svelte */}
              <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Svelte</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows7.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* NextJS */}
              <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8bh-content"
                  id="panel8bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>NextJS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows8.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Flask */}
              <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel9bh-content"
                  id="panel9bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Flask</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows9.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Express */}
              <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel10bh-content"
                  id="panel10bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Express.js</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows10.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Bootstrap */}
              <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel11bh-content"
                  id="panel11bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Bootstrap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows11.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* MaterialUI */}
              <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel12bh-content"
                  id="panel12bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>MaterialUI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows12.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Tailwind CSS */}
              <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel13bh-content"
                  id="panel13bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tailwind CSS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows13.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Databases, ORMs, and RDMS</h4>
              {/* SQL */}
              <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel14bh-content"
                  id="panel14bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>SQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row14.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Sequelize */}
              <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel15bh-content"
                  id="panel15bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Sequelize</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows15.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* SQLAlchemy */}
              <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel16bh-content"
                  id="panel16bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>SQLAlchemy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows16.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* PostgreSQL */}
              <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel17bh-content"
                  id="panel17bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>PostgreSQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows17.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* MongoDB */}
              <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel18bh-content"
                  id="panel18bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>MongoDB</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows18.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* NoSQL */}
              {/* <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel19bh-content"
                  id="panel19bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>NoSQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Containerization</h4>
              {/* Docker */}
              <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel20bh-content"
                  id="panel20bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Docker</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows20.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

              {/* Kubernetes */}
              <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel21bh-content"
                  id="panel21bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Kubernetes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows21.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='resource-main-content'>
            <h3>Specialties</h3>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Machine Learning</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel22bh-content"
                  id="panel22bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          {/* <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows22.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel23bh-content"
                  id="panel23bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          {/* <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows23.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel24bh-content"
                  id="panel24bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          {/* <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row24.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                {/* <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel25bh-content"
                  id="panel25bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Front-End Development</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel26bh-content"
                  id="panel26bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows26.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel27bh-content"
                  id="panel27bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          {/* <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell> */}
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows27.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel28bh-content"
                  id="panel28bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          {/* <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell> */}
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows28.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel29bh-content"
                  id="panel29bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          {/* <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell> */}
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows29.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Back-End Development</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel30'} onChange={handleChange('panel30')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel30bh-content"
                  id="panel30bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell>
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows30.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.resourceType}</TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel31'} onChange={handleChange('panel31')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel31bh-content"
                  id="panel31bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          {/* <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell> */}
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows31.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel32'} onChange={handleChange('panel32')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel32bh-content"
                  id="panel32bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          {/* <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell> */}
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows32.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel33bh-content"
                  id="panel33bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Name</TableCell>
                          <TableCell sx={{ "width": "150px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Link</TableCell>
                          {/* <TableCell sx={{ "width": "140px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Resource Type</TableCell> */}
                          <TableCell sx={{ "width": "100px", "fontSize": "17px", "fontWeight": "bold" }} align="center">Languages</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows33.map((row) => (
                          <TableRow
                            key={row.resourceName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">
                              {row.resourceName}
                            </TableCell> */}
                            <TableCell sx={{ "width": "140px", "fontSize": "13px" }} align="center">{row.resourceName}</TableCell>
                            <TableCell sx={{ "width": "150px", "fontSize": "13px" }} align="center"><a href={row.link} target="_blank" rel="noreferrer noopener">Resource Link</a></TableCell>
                            <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell>
                            {/* <TableCell sx={{ "width": "100px", "fontSize": "13px" }} align="center">{row.relatedLanguages}</TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Game Development</h4>
                {/* Services & Tools */}
                <Accordion expanded={expanded === 'panel34'} onChange={handleChange('panel34')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel34bh-content"
                  id="panel34bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Services & Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Courses */}
                <Accordion expanded={expanded === 'panel35'} onChange={handleChange('panel35')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel35bh-content"
                  id="panel35bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Tutorials */}
                <Accordion expanded={expanded === 'panel36'} onChange={handleChange('panel36')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel36bh-content"
                  id="panel36bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

                {/* Documentation */}
                <Accordion expanded={expanded === 'panel37'} onChange={handleChange('panel37')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel37bh-content"
                  id="panel37bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='resource-main-content'>
            <h3>Languages</h3>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>C#</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel38'} onChange={handleChange('panel38')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel38bh-content"
                  id="panel38bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel39'} onChange={handleChange('panel39')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel39bh-content"
                  id="panel39bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel40'} onChange={handleChange('panel40')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel40bh-content"
                  id="panel40bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>C++</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel41bh-content"
                  id="panel41bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel42'} onChange={handleChange('panel42')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel42bh-content"
                  id="panel42bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel43'} onChange={handleChange('panel43')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel43bh-content"
                  id="panel43bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>CSS</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel44bh-content"
                  id="panel44bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel45'} onChange={handleChange('panel45')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel45bh-content"
                  id="panel45bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel46'} onChange={handleChange('panel46')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel46bh-content"
                  id="panel46bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>HTML</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel47'} onChange={handleChange('panel47')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel47bh-content"
                  id="panel47bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel48'} onChange={handleChange('panel48')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel48bh-content"
                  id="panel48bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel49'} onChange={handleChange('panel49')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel49bh-content"
                  id="panel49bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>JavaScript</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel50'} onChange={handleChange('panel50')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel50bh-content"
                  id="panel50bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel51'} onChange={handleChange('panel51')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel51bh-content"
                  id="panel51bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel52bh-content"
                  id="panel52bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Java</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel53'} onChange={handleChange('panel53')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel53bh-content"
                  id="panel53bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel54'} onChange={handleChange('panel54')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel54bh-content"
                  id="panel54bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel55'} onChange={handleChange('panel55')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel55bh-content"
                  id="panel55bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Python</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel56'} onChange={handleChange('panel56')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel56bh-content"
                  id="panel56bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel57'} onChange={handleChange('panel57')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel57bh-content"
                  id="panel57bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel58'} onChange={handleChange('panel58')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel58bh-content"
                  id="panel58bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>Rust</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel59'} onChange={handleChange('panel59')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel59bh-content"
                  id="panel59bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel60'} onChange={handleChange('panel60')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel60bh-content"
                  id="panel60bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel61'} onChange={handleChange('panel61')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel61bh-content"
                  id="panel61bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className='resource-section'>
              <h4 style={{"marginLeft": "10px"}}>TypeScript</h4>
              {/* Documentation */}
              <Accordion expanded={expanded === 'panel62'} onChange={handleChange('panel62')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel62bh-content"
                  id="panel62bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Documentation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Tutorials */}
              <Accordion expanded={expanded === 'panel63'} onChange={handleChange('panel63')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel63bh-content"
                  id="panel63bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Tutorials</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Continue Learning */}
              <Accordion expanded={expanded === 'panel64'} onChange={handleChange('panel64')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel64bh-content"
                  id="panel64bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default ResourcesComponent;
