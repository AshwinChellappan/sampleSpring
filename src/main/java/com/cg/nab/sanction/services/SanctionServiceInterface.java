package com.cg.nab.sanction.services;

import java.util.List;

import com.cg.nab.sanction.model.SanctionDataDao;
import com.cg.nab.sanction.model.SanctionDetails;

public interface SanctionServiceInterface {

	public List<SanctionDetails> getSanctionData();

	public String setSanctionData(SanctionDataDao sanData);

}
