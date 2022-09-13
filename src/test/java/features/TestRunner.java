package features;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.junit5.Karate;
import cucumber.api.CucumberOptions;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;


@CucumberOptions
public class TestRunner
{
/*
    @Karate.Test
    Karate testUsers() {
        return Karate.run().relativeTo(getClass());*/


    @Test
    public void parallelTest()
    {
        Results results = Runner.builder().outputCucumberJson(true).path("classpath:features").parallel(5);
      //  assertEquals(0, results.getFailCount(), results.getErrorMessages());
        generateReport(results.getReportDir());
        assertTrue(results.getErrorMessages(), results.getFailCount() == 0);
    }

    public static void generateReport(String karateOutputPath) {
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] { "json" }, true);
        List<String> jsonPaths = new ArrayList<>(jsonFiles.size());
        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
        Configuration config = new Configuration(new File("Artifacts"), "Profund_API_Framework");
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
        reportBuilder.generateReports();
    }




}
