import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

public class DBHandler extends HttpServlet{
    public void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException
    {
        response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
        response.setContentType("application/json");
        String action = request.getParameter("action");
        try {
            if(action.equals("AddItem"))
            {
                Item item = new Item();
                item.Name=request.getParameter("ItemName");
                item.Description=request.getParameter("itemDescription");
                item.Category=request.getParameter("itemCategory");
                item.Price=Double.parseDouble(request.getParameter("itemPrice"));
                item.Likes=Integer.parseInt(request.getParameter("itemLikes"));
                item.Dislikes=Integer.parseInt(request.getParameter("itemDislikes"));
                Connection connection=getConnection();
                String result;
                String query="Insert into items(itemName,itemPrice,itemDescription,itemCategory,itemLikes,itemDislikes) Values(\""+item.Name+"\","+item.Price+",\""+item.Description+"\",\""+item.Category+"\","+item.Likes+","+item.Dislikes+")";
                Statement statement=connection.createStatement();
                int rowsAffected=statement.executeUpdate(query);
                if(!(rowsAffected==0))
                    result= "{\"status\":true,\"msg\":\"Item Added\"}";
                else
                    result= "{\"status\":false,\"msg\":\"Item Not Added\"}";
                response.getWriter().println(result);
            }
            if(action.equals("View"))
            {
                Connection connection=getConnection();
                String query="SELECT * from ranking";
                Statement statement=connection.createStatement();
                ResultSet resultSet=statement.executeQuery(query);
                String output="{\"status\":true,\"result\":[";
                int i=0;
                while (resultSet.next())
                {
                    output+= "{\"country\":\"" + resultSet.getString("team") + "\",\"rank\":" + resultSet.getString("score") + "}";
                    if(!resultSet.isLast())
                    {
                        output+=",";
                    }
                    i++;
                }
                output+="]}";
                response.getWriter().println(output);
            }
            if(action.equals("Delete"))
            {
                String country=request.getParameter("country");
                Connection connection=getConnection();
                String query="DELETE FROM ranking WHERE team='"+country+"'";
                Statement statement=connection.createStatement();
                String result;
                int rowsAffected=statement.executeUpdate(query);
                if(!(rowsAffected==0))
                    result= "{\"status\":true,\"msg\":\"Item Deleted Successfully\",\"query\":\""+query+"\"}";
                else
                    result= "{\"status\":false,\"msg\":\"Item Not Found.\",\"query\":\""+query+"\"}";
                response.getWriter().println(result);
            }
            if(action.equals("Update"))
            {
                String country=request.getParameter("country");
                String rank=request.getParameter("rank");
                Connection connection=getConnection();
                String query="UPDATE `ranking` SET `score` = "+rank+" WHERE `team` = '"+country+"'";
                Statement statement=connection.createStatement();
                String result;
                int rowsAffected=statement.executeUpdate(query);
                if(!(rowsAffected==0))
                    result= "{\"status\":true,\"msg\":\"Item Updated Successfully\",\"query\":\""+query+"\"}";
                else
                    result= "{\"status\":false,\"msg\":\"Item Not Found.\",\"query\":\""+query+"\"}";
                response.getWriter().println(result);
            }
        }
        catch (Exception e)
        {
            response.getWriter().println("{\"status\":false,\"msg\":\"Unable to connect to database.\"}");
        }
    }
    public static Connection getConnection()throws SQLException,ClassNotFoundException
    {
        Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/restaurant_management","root","1234");
    }
}
