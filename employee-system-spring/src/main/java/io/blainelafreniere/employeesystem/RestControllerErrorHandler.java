package io.blainelafreniere.employeesystem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;
import java.sql.SQLException;
import java.util.HashMap;

/*
@RestControllerAdvice
public class RestControllerErrorHandler {
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    HashMap<String, String> handleValidationException(ConstraintViolationException e) {
        HashMap<String, String> errors = new HashMap<String, String>();
        errors.put("errors", e.getMessage());
        return errors;
    }
}
*/