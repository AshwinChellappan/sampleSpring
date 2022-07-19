

$(document).ready(function() {

	var table = $('#SanctionTable').DataTable();
	$('#SanctionTable tbody').on('click', 'tr', function() {
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
		} else {
			table.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		}
	});


	// Button Add , Update & Delete Action

	$('#OnUpdate, #OnDelete, #OnAdd').click(function() {
		var sanGrd = $('#SanctionTable').DataTable();
		var sanDta = sanGrd.row(".selected").data();
		var text = $(this).data('req');
		if (sanDta && text != 'Add') {
			if (text == 'Delete') {
				table.row('.selected').remove().draw(false);
			} else if (text == 'Update') {
				$("#reqtype").val("update");
				sanGrdUpdate(sanDta);
				addVessel();
				addTransParty();
				$('#sanctionGridActnModal').modal('show');
			}
		} else if (text == 'Add') {
			clearTxt();
			$("#reqtype").val("new");
			var serlNo = 'DT-' + Math.floor(Math.random() * 101);
			$("#serlNo").val(serlNo);
			addVessel();
			addTransParty();
			$('#sanctionGridActnModal').modal('show');

		} else {
			alert("Please select the row to " + text);
			$('#sanctionGridActnModal').modal('hide');
		}

	});


	$("#sanctionActnForm").on("submit", function() {
		if (confirm('Are you Ok to Save ?')) {
			saveVesselData();
			saveTranPartyData();
			var serlNo = $("#serlNo").val();
			var invoiceNo = $("#invoiceNo").val();
			var billOfLadding = $("#billOfLadding").val();
			var loadingDetails = $("#loadingDetails").val();
			var dischargeDetails = $("#dischargeDetails").val();
			var vessel = $("#vessel").val();
			var tranPrty = $("#tranPrty").val();
			var portFrom = $("#portFrom").val();
			var portTo = $("#portTo").val();
			var placeOfReceipt = $("#placeOfReceipt").val();
			var destination = $("#destination").val();
			var remarks = $("#vremarks").val();
			var dummyVessel = "...";
			var dummyTranPrty = "...";

			var sj = "";
			var reqtype = $("#reqtype").val();
			if (reqtype == "update") {
				var table1 = $('#SanctionTable').DataTable();
				var sanDta = table1.rows().data();
				$.each(sanDta, $.proxy(function(index, item) {
					console.log(index);
					var gridSerlNo = item[0];
					if (gridSerlNo == serlNo)
						sj = index;
				}, this));


				var temp = [];
				temp[0] = serlNo;
				temp[1] = invoiceNo;
				temp[2] = billOfLadding;
				temp[3] = loadingDetails;
				temp[4] = dischargeDetails;
				temp[5] = portFrom;
				temp[6] = portTo;
				temp[7] = placeOfReceipt;
				temp[8] = destination;
				temp[9] = remarks;
				temp[10] = vessel;
				temp[11] = dummyVessel;
				temp[12] = tranPrty;
				temp[13] = dummyTranPrty;

				$('#SanctionTable').DataTable().row(sj).data(temp).draw(false);
			} else {


				$('#SanctionTable').dataTable().fnAddData([
					serlNo, invoiceNo, billOfLadding, loadingDetails, dischargeDetails, portFrom, portTo, placeOfReceipt, destination, remarks, vessel, dummyVessel, tranPrty, dummyTranPrty
				]);

			}

			$('#sanctionGridActnModal').modal('hide');
		}
		$('.modal-backdrop').remove();
		return false;
	});


	$('#OnSubmit').click(function() {

		if (confirm('Fine to Submit ?')) {
			var table1 = $('#SanctionTable').DataTable();
			var mRef = $('#masterRef').val();
			var eRef = $('#eventRef').val();
			var otherDtls = $('#otherDtls').val();
			var otherDtls1 = $('#otherDtls1').val();
			var otherDtls2 = $('#otherDtls2').val();
			var otherremarks = $('#otherremarks').val();
			var sanDta = table1.rows().data();
			var datass = [];
			$.each(sanDta, $.proxy(function(index, item) {
				console.log(index);
				var rowda = {
					serlNo: item[0],
					invoiceNo: item[1],
					billOfLadding: item[2],
					loadingDetails: item[3],
					dischargeDetails: item[4],
					portFrom: item[5],
					portTo: item[6],
					placeOfReceipt: item[7],
					destination: item[8],
					remarks: item[9],
					vessel: item[10],
					tranPrty: item[12]
				};
				datass.push(rowda);

			}, this));
			var sanData = {
				"sanctionDetails": datass,
				"masterRef": mRef,
				"eventRef": eRef,
				"otherDtls": otherDtls,
				"otherDtls1": otherDtls1,
				"otherDtls2": otherDtls2,
				"otherremarks": otherremarks
			};

			$.ajax({
				type: 'POST',
				url: "onSubmit",
				dataType: "html",
				contentType: "application/json",
				data: JSON.stringify(sanData),
				success: function() {
					alert("Record Successfully Added/Updated !!!");
					document.location.href = 'success';
				},
				error: function(e) {
					alert("error:" + e);
				}
			});
		}
	});


	$('#OnCancel').click(function() {
		if (confirm('Are you Ok to Close ?')) {
			console.log("close");
			window.close()
		}
	});
});