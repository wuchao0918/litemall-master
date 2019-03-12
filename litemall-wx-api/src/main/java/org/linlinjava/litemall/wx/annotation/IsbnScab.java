package org.linlinjava.litemall.wx.annotation;


/**
 * 扫码服务调用API信息
 */
public class IsbnScab {
    private String isbnscan;
    private String title ;
    //作者
    private String[] author ;
    //出版社
    private String publisher ;
    //封面图片的url
    private String image ;
    //isbn10
    private String isbn10 ;
    //isbn13
    private String isbn13 ;
    //出版日期
    private String pubdate ;
    //概述
    private String summary ;
    //页数
    private String pages ;
    //价格
    private String price ;
    //获取失败的返回信息
    private String msg ;
    private String code ;


    public String getIsbnscan() {
        return isbnscan;
    }

    public void setIsbnscan(String isbnscan) {
        this.isbnscan = isbnscan;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String[] getAuthor() {
        return author;
    }

    public void setAuthor(String[] author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getIsbn10() {
        return isbn10;
    }

    public void setIsbn10(String isbn10) {
        this.isbn10 = isbn10;
    }

    public String getIsbn13() {
        return isbn13;
    }

    public void setIsbn13(String isbn13) {
        this.isbn13 = isbn13;
    }

    public String getPubdate() {
        return pubdate;
    }

    public void setPubdate(String pubdate) {
        this.pubdate = pubdate;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getPages() {
        return pages;
    }

    public void setPages(String pages) {
        this.pages = pages;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
     