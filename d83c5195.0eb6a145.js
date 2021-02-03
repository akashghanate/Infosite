(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return l}));var r=t(3),n=t(7),c=(t(0),t(96)),i={id:"str",title:"String",sidebar_label:"String",hide_title:!0},s={unversionedId:"java/str",id:"java/str",isDocsHomePage:!1,title:"String",description:"String (Java.lang.String)",source:"@site/docs/java/string.md",slug:"/java/str",permalink:"/InfoSite/docs/java/str",editUrl:"https://github.com/akashghanate/InfoSite/docs/java/string.md",version:"current",sidebar_label:"String",sidebar:"docs",next:{title:"String Buffer (String Maipulation)",permalink:"/InfoSite/docs/java/sb"}},b=[{value:"String (Java.lang.String)",id:"string-javalangstring",children:[{value:"Instantiate",id:"instantiate",children:[]},{value:"Methods (s)",id:"methods-s",children:[]}]}],p={toc:b};function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"string-javalangstring"},"String (Java.lang.String)"),Object(c.b)("p",null,"Immutable Datatype"),Object(c.b)("h3",{id:"instantiate"},"Instantiate"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String s;\n")),Object(c.b)("h3",{id:"methods-s"},"Methods (s)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"contains()")," - returns true/ false if subString is present in String"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"s.contains(String subString);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"indexOf()")," - returns the index of the subString/ character"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"int n = s.indexOf(String subString);\nint n = s.indexOf(char ch);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"replace()")," - replace old char wth new char for all occurance of old char"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"s.replace(char old,char new);\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"replaceFirst()")," - replace old char wth new char for first occurance of old char",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"s.replaceFirst(char old,char new);\n"))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"matches()")," - tells whether or not the string matches the given regular expression, returns boolean"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"s.matches('regex');\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"split()")," - split string at matching regex into string array"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String[] array = s.split('regex');\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"startsWith()")," - method determines whether a string begins with the characters of a specified string, returning true or false"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"s.startsWith(String prefix);\ns.startsWith(String prefix,int position); // starts searching from the position index\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"endsWith()")," - method determines whether a string ends with the characters of a specified string, returning true or false"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"s.endsWith(String suffix);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"toLowerCase()")," - converts string to lowercase string"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String str = s.toLowerCase();\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"toUpperCase()")," - converts string to uppercase string"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String str = s.toUpperCase();\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"trim()")," - removes leading and training ",Object(c.b)("em",{parentName:"p"},"whitespace")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String str = s.trim();\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"join()")," - returns string joined with given ",Object(c.b)("em",{parentName:"p"},"delimiter"),"  "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String str = s.join(CharSequence delimiter,CharSequence elements); //elements here are strings\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"compareTo()")," - returns int value after comparing two strings lexographically"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"int n = s1.compareTo(s2);\n")))),Object(c.b)("hr",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Character.isLetter()")," - returns true/false if char is Letter",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Character.isLetter(char ch);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Character.isDigit()")," - returns true/false if char is digit",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Character.isDigit(char ch);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Character.isWhitespace()")," - returns true/false if char is space",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Character.isWhitespace(char ch);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Character.isUpperCase()")," - returns true/false if char is a Uppercase letter",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Character.isUpperCase(char ch);\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Character.isLowerCase()")," - returns true/false if char is a Lowercase letter",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Character.isLowerCase(char ch);\n")))))}l.isMDXComponent=!0}}]);