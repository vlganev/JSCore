function endsWith(str, substring) {
    if(substring === str.substring(str.length - substring.length, str.length)) {
        return true;
    }
    return false;
}