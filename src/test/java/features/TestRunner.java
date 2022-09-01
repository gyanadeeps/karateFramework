package features;

import com.intuit.karate.junit5.Karate;


public class TestRunner
{

    @Karate.Test
    Karate testUsers() {
        return Karate.run("users").relativeTo(getClass());

    }
    @Karate.Test
    Karate testadmin() {
        return Karate.run("GET_Admin").relativeTo(getClass());

    }

}
