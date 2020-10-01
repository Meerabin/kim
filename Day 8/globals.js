
switch(process.argv[2])
{
    case "devo":console.log("you are in production mode")
    break;
    case "prod":console.log("you are in development mode")
    break;
    default    :console.log("Default mode")
}
