package SendSMS;
/**
 *
 * @author charwitha999
 */
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SendSMS {
  
  public static final String ACCOUNT_SID = "ACb912865fc5f33e68bbbc345243cf6615";
  public static final String AUTH_TOKEN = "82d6e28a3aa999c596405a2280d807fb";

  public static void main(String[] args) {
    Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    
    
    Message message = Message.creator(new PhoneNumber("+91 91000 90958"),
        new PhoneNumber("+1929-244-2919"), 
        "This is the ship that made the Kessel Run in fourteen parsecs?").create();

    System.out.println(message.getSid());
  }
}
