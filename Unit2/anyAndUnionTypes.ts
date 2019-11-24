var a: any; // any is type where we can assign any types on this variable

a = 5;
a = 'hey';

var b: string | number | boolean; // when we want to union few types for one variable we can use the pipe(|) to union them

b = 'hey';
b = 5;
b = true;
