function startsWith(str, substring) {
    if(substring === str.substr(0, substring.length)) {
        return true;
    }
    return false;
}