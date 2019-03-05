package com.davinci.exceptions;

public class ThereIsUserException extends RuntimeException {
    public ThereIsUserException(String message){
        super(message);
    }
}
