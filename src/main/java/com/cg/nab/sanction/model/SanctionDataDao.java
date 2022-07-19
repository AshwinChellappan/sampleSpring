package com.cg.nab.sanction.model;

import java.util.List;

public class SanctionDataDao {
	private List<SanctionDetails> sanctionDetails;
	private String masterRef;
	private String eventRef;
	private String otherDtls;
	private String otherDtls1;
	private String otherDtls2;
	private String otherremarks;

	public List<SanctionDetails> getSanctionDetails() {
		return sanctionDetails;
	}

	public void setSanctionDetails(List<SanctionDetails> sanctionDetails) {
		this.sanctionDetails = sanctionDetails;
	}

	public String getMasterRef() {
		return masterRef;
	}

	public void setMasterRef(String masterRef) {
		this.masterRef = masterRef;
	}

	public String getEventRef() {
		return eventRef;
	}

	public void setEventRef(String eventRef) {
		this.eventRef = eventRef;
	}

	public String getOtherDtls() {
		return otherDtls;
	}

	public void setOtherDtls(String otherDtls) {
		this.otherDtls = otherDtls;
	}

	public String getOtherDtls1() {
		return otherDtls1;
	}

	public void setOtherDtls1(String otherDtls1) {
		this.otherDtls1 = otherDtls1;
	}

	public String getOtherDtls2() {
		return otherDtls2;
	}

	public void setOtherDtls2(String otherDtls2) {
		this.otherDtls2 = otherDtls2;
	}

	public String getOtherremarks() {
		return otherremarks;
	}

	public void setOtherremarks(String otherremarks) {
		this.otherremarks = otherremarks;
	}

}
