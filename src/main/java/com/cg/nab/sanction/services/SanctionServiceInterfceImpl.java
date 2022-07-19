package com.cg.nab.sanction.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.nab.sanction.model.SanctionDataDao;
import com.cg.nab.sanction.model.SanctionDetails;

@Service
public class SanctionServiceInterfceImpl implements SanctionServiceInterface {

	@Override
	public List<SanctionDetails> getSanctionData() {
		List<SanctionDetails> sancDtls = new ArrayList<>();
		SanctionDetails sd = new SanctionDetails();
		sd.setSerlNo("0001");
		sd.setInvoiceNo("0123654");
		sd.setBillOfLadding("as,,");
		sd.setLoadingDetails("LoadingDetails");
		sd.setDischargeDetails("Discharge value");
		sd.setVessel("[{\"blno\":\"DT-M1\",\"vesselName\":\"asdasdas\",\"vesselDesc\":\"asdasdasd\"}]");
		sd.setTranPrty(
				"[{\"tpBlno\":\"DT-M1\",\"tpRole\":\"asdasdas\",\"tpName\":\"asdasdasd\",\"tpCity\":\"asdasdasd\",\"tpCountry\":\"asdasdasd\"}]");
		sd.setPortFrom("PortFrom");
		sd.setPortTo("PortTo");
		sd.setPlaceOfReceipt("Recipt Place");
		/* sd.setNotifyParty("Set Notifyoparty"); */
		sd.setDestination("destination");
		/* sd.setAgent("AgentData"); */
		sd.setRemarks("Remarks");
		sancDtls.add(sd);

		SanctionDetails sd1 = new SanctionDetails();
		sd1.setSerlNo("0002");
		sd1.setInvoiceNo("25632144");
		sd1.setBillOfLadding("BillOflading");
		sd1.setLoadingDetails("LoadingDetails1");
		sd1.setDischargeDetails("Discharge value1");
		sd1.setVessel("[{\"blno\":\"DT-M2\",\"vesselName\":\"asdasdas\",\"vesselDesc\":\"asdasdasd\"}]");
		sd1.setTranPrty(
				"[{\"tpBlno\":\"DT-M1\",\"tpRole\":\"asdasdas\",\"tpName\":\"asdasdasd\",\"tpCity\":\"asdasdasd\",\"tpCountry\":\"asdasdasd\"}]");
		sd1.setPortFrom("PortFrom1");
		sd1.setPortTo("PortTo1");
		sd1.setPlaceOfReceipt("Recipt Place1");
		/* sd1.setNotifyParty("Set Notifyoparty1"); */
		sd1.setDestination("destination1");
		/* sd1.setAgent("AgentData1"); */
		sd1.setRemarks("Remarks1");
		sancDtls.add(sd1);

		return sancDtls;
	}

	@Override
	public String setSanctionData(SanctionDataDao sanDtl) {

		for (int j = 0; j < sanDtl.getSanctionDetails().size(); j++) {

			System.out.println("<<===============StarT===============>>" + j);

			System.out.println(sanDtl.getSanctionDetails().get(j).getSerlNo());
			System.out.println(sanDtl.getSanctionDetails().get(j).getInvoiceNo());
			System.out.println(sanDtl.getSanctionDetails().get(j).getBillOfLadding());
			System.out.println(sanDtl.getSanctionDetails().get(j).getLoadingDetails());
			System.out.println(sanDtl.getSanctionDetails().get(j).getDischargeDetails());
			System.out.println(sanDtl.getSanctionDetails().get(j).getVessel());
			System.out.println(sanDtl.getSanctionDetails().get(j).getTranPrty());
			System.out.println(sanDtl.getSanctionDetails().get(j).getPortFrom());
			System.out.println(sanDtl.getSanctionDetails().get(j).getPortTo());
			System.out.println(sanDtl.getSanctionDetails().get(j).getPlaceOfReceipt());
			/* System.out.println(sanDtl.getSanctionDetails().get(j).getNotifyParty()); */
			System.out.println(sanDtl.getSanctionDetails().get(j).getDestination());
			/* System.out.println(sanDtl.getSanctionDetails().get(j).getAgent()); */
			System.out.println(sanDtl.getSanctionDetails().get(j).getRemarks());

		}
		return null;
	}

}
