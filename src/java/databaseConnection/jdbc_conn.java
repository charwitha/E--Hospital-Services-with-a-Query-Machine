package databaseconnection;

    import java.sql.*;  
    class MysqlConn{  
    public static void main(String args[]){  
    try{  
    Class.forName("com.mysql.jdbc.Driver");  
    Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/cgps_hospitals","root","ch@rwi");   
     
    conn.close();  
    }
    catch(ClassNotFoundException | SQLException e){ 
        System.out.println(e);}  
    }  
    }  
