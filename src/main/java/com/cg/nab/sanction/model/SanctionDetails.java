package com.cg.nab.sanction.model;

public class SanctionDetails {

	private String invoiceNo;
	private String billOfLadding;
	private String loadingDetails;
	private String dischargeDetails;
	private String vessel;
	private String tranPrty;
	private String portFrom;
	private String portTo;
	private String placeOfReceipt;
	/* private String notifyParty; */
	private String destination;
	/* private String agent; */
	private String remarks;
	private String serlNo;

	public String getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	public String getBillOfLadding() {
		return billOfLadding;
	}

	public void setBillOfLadding(String billOfLadding) {
		this.billOfLadding = billOfLadding;
	}

	public String getLoadingDetails() {
		return loadingDetails;
	}

	public void setLoadingDetails(String loadingDetails) {
		this.loadingDetails = loadingDetails;
	}

	public String getDischargeDetails() {
		return dischargeDetails;
	}

	public void setDischargeDetails(String dischargeDetails) {
		this.dischargeDetails = dischargeDetails;
	}

	public String getVessel() {
		return vessel;
	}

	public void setVessel(String vessel) {
		this.vessel = vessel;
	}

	/*
	 * public String getShipper() { return shipper; }
	 *
	 * public void setShipper(String shipper) { this.shipper = shipper; }
	 */

	public String getPlaceOfReceipt() {
		return placeOfReceipt;
	}

	public void setPlaceOfReceipt(String placeOfReceipt) {
		this.placeOfReceipt = placeOfReceipt;
	}

	/*
	 * public String getNotifyParty() { return notifyParty; }
	 *
	 * public void setNotifyParty(String notifyParty) { this.notifyParty =
	 * notifyParty; }
	 */

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	/*
	 * public String getAgent() { return agent; }
	 *
	 * public void setAgent(String agent) { this.agent = agent; }
	 */

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getPortFrom() {
		return portFrom;
	}

	public void setPortFrom(String portFrom) {
		this.portFrom = portFrom;
	}

	public String getPortTo() {
		return portTo;
	}

	public void setPortTo(String portTo) {
		this.portTo = portTo;
	}

	public String getSerlNo() {
		return serlNo;
	}

	public void setSerlNo(String serlNo) {
		this.serlNo = serlNo;
	}

	public String getTranPrty() {
		return tranPrty;
	}

	public void setTranPrty(String tranPrty) {
		this.tranPrty = tranPrty;
	}

}
