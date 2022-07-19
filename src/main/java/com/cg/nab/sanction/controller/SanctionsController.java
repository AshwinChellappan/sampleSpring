package com.cg.nab.sanction.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cg.nab.sanction.model.SanctionDataDao;
import com.cg.nab.sanction.services.SanctionServiceInterface;

@Controller
@RequestMapping("/content")
public class SanctionsController {

	private static final String USERID = "USER_ID";

	// inject via application.properties
	@Value("${welcome.message:test}")
	private String message;
	//

	@Autowired
	private SanctionServiceInterface sanInter;

	@GetMapping("/test")
	public String test(ModelMap model, HttpServletRequest request) {
		return "Test";
	}

	@GetMapping("/success")
	public String success(ModelMap model, HttpServletRequest request) {
		return "success";
	}

	@GetMapping("/error")
	public String error(ModelMap model, HttpServletRequest request) {
		return "error";
	}

	@GetMapping("/sanctionProcess")
	public String sanctionHome(@RequestParam("MasterRef") String masterRef, @RequestParam("EventRef") String eventRef,
			ModelMap model, HttpServletRequest request) {
		System.out.println("SanctionProcess Start");
		System.out.println("MasterRef" + masterRef);
		System.out.println("EventRef" + eventRef);
		model.addAttribute(USERID, "TestUser");
		model.addAttribute("MasterRef", masterRef);
		model.addAttribute("EventRef", eventRef);
		model.addAttribute("sanReq", sanInter.getSanctionData());
		System.out.println("SanctionProcess End");
		return "home";
	}

	@PostMapping(value = "/onSubmit")
	public @ResponseBody String onSubmit(@RequestBody SanctionDataDao sanData, ModelMap model,
			HttpServletRequest request, BindingResult result1) {
		System.out.println("onSubmit");

		System.out.println(sanData.getMasterRef());
		System.out.println(sanData.getEventRef());
		System.out.println(sanData.getOtherDtls());
		System.out.println(sanData.getOtherDtls1());
		System.out.println(sanData.getOtherDtls2());
		System.out.println(sanData.getOtherremarks());

		System.out.println(sanData.getSanctionDetails().size());
		sanInter.setSanctionData(sanData);

		return "success";
	}

}
