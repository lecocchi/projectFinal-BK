package com.davinci.controller.Advice;

import com.davinci.dto.ErrorResponse;
import com.davinci.exceptions.ActiveSprintNotFoundException;
import com.davinci.exceptions.ErrorException;
import com.davinci.exceptions.LoginErrorException;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

@org.springframework.web.bind.annotation.ControllerAdvice
public class ControllerAdvice {


    private final static Logger LOGGER = Logger.getLogger(ControllerAdvice.class);

    @ExceptionHandler(ErrorException.class)
    public ResponseEntity error(ErrorException ex){

        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.CONFLICT.toString(), "Error", ex.getMessage()), HttpStatus.CONFLICT);
    }


    @ExceptionHandler(LoginErrorException.class)
    public ResponseEntity loginError(LoginErrorException ex){
        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND.toString(), "LOGIN INCORRECTO", "Usuario y/o contraseña no son correctos"), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ActiveSprintNotFoundException.class)
    public ResponseEntity activeSprintNotFoundException(ActiveSprintNotFoundException ex){
        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND.toString(), "Error", ex.getMessage()),HttpStatus.NOT_FOUND);
    }
}
