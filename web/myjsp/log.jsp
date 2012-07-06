
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'log.html' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    <s:iterator value="logs">
    	<s:property value="lg_custid"/>|<s:property value="lg_custname"/>|<s:property value="lg_prodid"/>|<s:property value="lg_accountId"/>|<s:property value="lg_areaid"/>|<s:property value="lg_prodname"/>|<s:property value="lg_timeLength"/>|<s:property value="lg_begintime"/>|<s:property value="lg_number"/><br/>
    </s:iterator>
    
    
    <a href='<s:url action="export"><s:param name="dataset" value="logs" /></s:url>'>导出</a>
    
  </body>
</html>
