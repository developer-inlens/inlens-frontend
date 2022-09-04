package com.inlens;


public class RecentImage {
    private String url;
    private String createdDate;

    public RecentImage(String url, String createdDate) {
        this.url = url;
        this.createdDate = createdDate;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
}
