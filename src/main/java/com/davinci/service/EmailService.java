package com.davinci.service;

import com.davinci.model.DailyItem;
import com.davinci.model.User;
import com.davinci.repository.DailyItemRepository;
import com.davinci.repository.DailyRepository;
import com.davinci.repository.UserRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Optional;

@Service
public class EmailService {

    private static final Logger LOGGER = Logger.getLogger(EmailService.class);

    private JavaMailSender emailSender;
    private DailyItemRepository dailyItemRepository;
    private UserRepository userRepository;

    @Autowired
    public EmailService(JavaMailSender emailSender,
                        DailyItemRepository dailyItemRepository,
                        UserRepository userRepository){
        this.emailSender = emailSender;
        this.dailyItemRepository = dailyItemRepository;
        this.userRepository = userRepository;
    }

    public void sendSimpleMessage(String dailyId){

        List<DailyItem> dailyItems = dailyItemRepository.findByDailyId(dailyId);
        int sizeDailyItem = dailyItems.size();
        String[] to = new String[sizeDailyItem];

        StringBuilder htmlMsg = new StringBuilder();
        htmlMsg.append("<h3>Integrantes:</h3>");

        for (int i = 0; i < sizeDailyItem ; i++) {
            Optional<User> userOptional = userRepository.findByUserName(dailyItems.get(i).getUserName());
            if (userOptional.isPresent()){
                to[i] = userOptional.get().getEmail();
            }

            htmlMsg.append("<h4 style='text-decoration: underline;'>" + dailyItems.get(i).getFirstName() + " " + dailyItems.get(i).getLastName() + "</h4>");
            htmlMsg.append( "<ul><li><span style='color: #216856; font-weight: bold;'>Ayer:</span> " +  dailyItems.get(i).getYesterday() + "</li></ul>");
            htmlMsg.append( "<ul><li><span style='color: #274469; font-weight: bold;'>Hoy:</span> " +  dailyItems.get(i).getToday() + "</li></ul>");

        }

        String dateDaily = "";
        if (sizeDailyItem > 0){
            dateDaily = dailyItems.get(0).getCreatedAt().getDayOfMonth() + "/" + dailyItems.get(0).getCreatedAt().getMonthValue();
        }

        try {

            MimeMessage mimeMessage = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, "utf-8");

            mimeMessage.setContent(htmlMsg.toString(), "text/html");
            helper.setTo(to);
            helper.setSubject("Daily correspondiente al día " + dateDaily);
            helper.setFrom("leju1712@gmail.com");

            LOGGER.info("Daily correspondiente al día " + dateDaily);

            emailSender.send(mimeMessage);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

}
