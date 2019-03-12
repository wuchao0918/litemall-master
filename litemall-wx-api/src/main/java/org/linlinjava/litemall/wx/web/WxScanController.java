package org.linlinjava.litemall.wx.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.linlinjava.litemall.core.util.ResponseUtil;
import org.linlinjava.litemall.db.service.LitemallOrderService;
import org.linlinjava.litemall.wx.annotation.IsbnScab;
import org.linlinjava.litemall.wx.annotation.LoginUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.net.URL;
import java.util.HashMap;
import java.util.Map;

/**
 * 扫码服务
 */
@RestController
@RequestMapping("/wx/Scan")
@Validated
public class WxScanController {
    private final Log logger = LogFactory.getLog(WxScanController.class);

    @Autowired
    private LitemallOrderService orderService;

    /**crypto
     * 用户个人页面数据
     * <p>
     * 目前是用户订单统计信息
     *
     * @param isbn 用户书籍ISBN码
     * @return 用户个人页面数据
     */

    /*前台获得扫一扫*/
    @GetMapping("/isbnScan")
    public String isbnScan(IsbnScab isbn) {
        System.out.println("ISBN=="+isbn.getIsbnscan());

        String isbnUrl = "http://api.douban.com/book/subject/isbn/"+ isbn.getIsbnscan();
      //  URL url = new URL(isbnUrl);



        return isbn.getIsbnscan();
    }





}