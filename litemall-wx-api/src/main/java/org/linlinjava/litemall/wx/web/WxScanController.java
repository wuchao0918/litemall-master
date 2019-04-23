package org.linlinjava.litemall.wx.web;

import me.chanjar.weixin.common.util.http.URIUtil;
import org.apache.commons.logging.Log;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.logging.LogFactory;
import org.apache.http.*;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HttpContext;
import org.hibernate.validator.internal.util.privilegedactions.GetMethod;
import org.linlinjava.litemall.core.util.ResponseUtil;
import org.linlinjava.litemall.db.service.LitemallOrderService;
import org.linlinjava.litemall.wx.annotation.TudouBookInfo;
import org.linlinjava.litemall.wx.annotation.BookXMLParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.linlinjava.litemall.core.util.JacksonUtil;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import java.util.Vector;
import java.io.IOException;
import java.io.InputStream;

import org.apache.http.client.ClientProtocolException;
import org.linlinjava.litemall.wx.util.BookApi;
import org.apache.http.impl.client.DefaultHttpClient;

/**
 * 扫码服务
 */
@RestController
@RequestMapping("/wx/scan")
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
     * @param body    请求内容，{ isbnscan: xxx}
     * @param request 请求对象
     * @return 用户个人页面数据
     */

    /*前台获得扫一扫*/
    @PostMapping("/isbnScan")
    public Vector<String> isbnScan(@RequestBody String body, HttpServletRequest request) throws ClientProtocolException, IOException{
        Vector<String> Book=null;
        BookApi bookApi=new BookApi();
        String Message;
        String APPKEY="52b2a76f626cf49d23c61112eed1eb50";
        String Publish,Name,Author,Price,Image,Summary,ISBN;
        Map<String, Object> data = new HashMap<String, Object>();
        String isbnscan = JacksonUtil.parseString(body, "isbnscan");
        System.out.println("ISBN=="+isbnscan);
        //豆瓣接口3月21日调试不同
        //String isbnUrl = "https://api.douban.com/v2/book/isbn/"+ isbnscan;


        //通用CLASS BOOSAPI
      //  BookApi.getRequest1(isbnscan);





        String isbnUrl = "http://feedback.api.juhe.cn/ISBN";
        String s1 = null;
        Map params = new HashMap();//请求参数
        params.put("key",APPKEY);//应用APPKEY(应用详细页查询)
        params.put("dtype","");//返回数据的格式,xml或json，默认json
        params.put("sub",isbnscan);//图书ISBN编码

        try {
            s1=bookApi.net(isbnUrl, params, "GET");
        } catch (Exception e) {
            e.printStackTrace();
        }


        //s1 = getData(isbnUrl);
        System.out.println(s1);
        //JSONObject mybook=new JSONObject(s1);
        System.out.println("aaaa"+s1.length());
        Book = new Vector<String>();

            JSONObject json = JSONObject.fromObject(s1);

            //data.put("mybook",mybook);

            System.out.println( json.get("reason"));
            Message=json.get("reason").toString();


            if(json.getInt("error_code")==0) {
                JSONObject result=JSONObject.fromObject(json.get("result"));
                Publish = result.get("publisher").toString();
                //得到书名
                Name = result.get("title").toString();
                //得到作者

                Author = result.get("author").toString();
                //得到价格
                Price = result.get("price").toString();
                //图片路径
                Image = result.get("images_large").toString();
                //JSONObject images=JSONObject.fromObject(json.get("images"));

                //详情
                Summary = result.get("summary").toString();
                //ISBN
                ISBN = result.get("isbn13").toString();

                //将得到的信息存储在集合中


                Book.add(Message);
                Book.add(Name);
                Book.add(Author);
                Book.add(Price);
                Book.add(Publish);
                Book.add(Image);
                Book.add(Summary);
                Book.add(ISBN);
            }


        return Book;
    }



    public static String decodeUnicode(final String dataStr) {
        int start = 0;
        int end = 0;
        final StringBuffer buffer = new StringBuffer();
        while (start > -1) {
            end = dataStr.indexOf("\\u", start + 2);
            String charStr = "";
            if (end == -1) {
                charStr = dataStr.substring(start + 2, dataStr.length());
            } else {
                charStr = dataStr.substring(start + 2, end);
            }
            char letter = (char) Integer.parseInt(charStr, 16); // 16进制parse整形字符串。
            buffer.append(new Character(letter).toString());
            start = end;
        }
        return buffer.toString();
    }

    public String getData(String addess){
        URL url = null;
        HttpURLConnection httpConn = null;
        BufferedReader in = null;

        StringBuffer sb = new StringBuffer();
        try{
            url = new URL(addess);
            in = new BufferedReader(new InputStreamReader(url.openStream(),"utf-8") );
            String str = null;
            while((str = in.readLine()) != null) {
                sb.append( str );
            }
        } catch (Exception ex) {
        } finally{
            try{
                if(in!=null) {

                    in.close();
                }
            }catch(IOException ex) {
            }
        }
        String  data =sb.toString();
        return data;
    }


    }