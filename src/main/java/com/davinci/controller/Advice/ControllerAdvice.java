package com.davinci.controller.Advice;

import com.davinci.dto.ErrorResponse;
import com.davinci.exceptions.*;
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

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity userNotFoundException(UserNotFoundException ex){
        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.NOT_FOUND.toString(), "Error", ex.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ThereIsUserException.class)
    public ResponseEntity thereIsUserException(ThereIsUserException ex){
        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.CONFLICT.toString(), "Error", ex.getMessage()),HttpStatus.CONFLICT);
    }

    @ExceptionHandler(ThereIsASprintActiveException.class)
    public ResponseEntity thereIsASprintActiveException(ThereIsASprintActiveException ex){
        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.CONFLICT.toString(), "Error", ex.getMessage()),HttpStatus.CONFLICT);
    }

    @ExceptionHandler(InvalidIssueStateForSendIssueToSprintException.class)
    public ResponseEntity invalidIssueStateForSendIssueToSprintException(InvalidIssueStateForSendIssueToSprintException ex){
        LOGGER.error(ex.getMessage());
        return new ResponseEntity(new ErrorResponse(HttpStatus.CONFLICT.toString(), "Error", ex.getMessage()),HttpStatus.CONFLICT);
    }
}
