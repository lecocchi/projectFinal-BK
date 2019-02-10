package com.davinci.controller.Advice;

import com.davinci.dto.ErrorResponse;
import com.davinci.exceptions.ErrorException;
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
}
