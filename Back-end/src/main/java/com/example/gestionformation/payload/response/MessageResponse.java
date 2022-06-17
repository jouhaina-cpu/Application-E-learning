package com.example.gestionformation.payload.response;

public class MessageResponse {
    private boolean success;
	private String message;
	private String detail;

	public MessageResponse(String message) {
        this.message = message;
    }
	
    public MessageResponse(boolean success,String message,String detail) {
        this.message = message;
        this.success=success;
        this.detail=detail;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}
}

