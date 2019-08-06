package com.davinci.exceptions;

public class InvalidIssueStateForSendIssueToSprintException extends RuntimeException {
    public InvalidIssueStateForSendIssueToSprintException(String message) {
        super(message);
    }
}
